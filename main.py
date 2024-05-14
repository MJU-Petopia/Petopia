from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import io
from PIL import Image
import base64
from torchvision import transforms
import logging 
from models_config import ai_predict


app = FastAPI()

logging.basicConfig(level=logging.INFO)
    
class Item(BaseModel):
    image_base64: str
    category: str  # 'eye' or 'skin'
    animal: str   # 'dog' or 'cat'

transform = transforms.Compose([
    transforms.Resize((224, 224)),  
    transforms.ToTensor(),         
    transforms.Normalize(mean=[0.5, 0.5, 0.5], std=[0.5, 0.5, 0.5])  
])

@app.post("/predict/")
async def predict(item: Item):
    logging.info("Models loaded successfully.")
    try:
        base64_image = item.image_base64
        base64_decoded = base64.b64decode(base64_image)
        image = Image.open(io.BytesIO(base64_decoded)).convert('RGB')
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid image: {e}")

    image = transform(image)
    key = f"{item.animal}_{item.category}"
    logging.info("Key:" + key)
    predictions=ai_predict(key, image)
    logging.info(f"Type of predictions: {type(predictions)}")
    logging.info(f"Contents of predictions: {predictions}")
    return predictions