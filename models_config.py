import torch
from fastapi import FastAPI, HTTPException
import torch.nn as nn
from transformers import ViTForImageClassification
import torch.nn.functional as F

class EyeDiseaseViT_dog_eye(nn.Module):
    def __init__(self, num_classes=2):
        super(EyeDiseaseViT_dog_eye, self).__init__()
        self.model = ViTForImageClassification.from_pretrained('google/vit-base-patch16-224-in21k')
        num_ftrs = self.model.classifier.in_features
        self.model.classifier = nn.Linear(num_ftrs, num_classes)

    def forward(self, x):
        return self.model(x)
    
model1 = EyeDiseaseViT_dog_eye()
model2 = EyeDiseaseViT_dog_eye()
model3 = EyeDiseaseViT_dog_eye()
model4 = EyeDiseaseViT_dog_eye()
model5 = EyeDiseaseViT_dog_eye()
model6 = EyeDiseaseViT_dog_eye()
model7 = EyeDiseaseViT_dog_eye()
model8 = EyeDiseaseViT_dog_eye()
model9 = EyeDiseaseViT_dog_eye()
model10 = EyeDiseaseViT_dog_eye()
model11 = EyeDiseaseViT_dog_eye()
model12 = EyeDiseaseViT_dog_eye()
model13 = EyeDiseaseViT_dog_eye()
model14 = EyeDiseaseViT_dog_eye()
model15 = EyeDiseaseViT_dog_eye()
model16 = EyeDiseaseViT_dog_eye()
model17 = EyeDiseaseViT_dog_eye()
model18 = EyeDiseaseViT_dog_eye()
model19 = EyeDiseaseViT_dog_eye()
model20 = EyeDiseaseViT_dog_eye()

def load_models():
    model1.load_state_dict(torch.load(f'./models/dog_eye_conjunctivitis_v2.pth'))
    model2.load_state_dict(torch.load(f'./models/dog_eye_ulcerating.pth'))
    model3.load_state_dict(torch.load(f'./models/dog_eye_cataract.pth'))
    model4.load_state_dict(torch.load(f'./models/dog_eye_pigmentation.pth'))
    model5.load_state_dict(torch.load(f'./models/dog_eye_blepharitis.pth'))
    model6.load_state_dict(torch.load(f'./models/dog_eye_nuclear_sclerosis.pth'))
    
    model7.load_state_dict(torch.load(f'./models/cat_eye_corneal_ulcer_v2.pth'))
    model8.load_state_dict(torch.load(f'./models/cat_eye_corneal_sequesration.pth'))
    model9.load_state_dict(torch.load(f'./models/cat_eye_conjunctivitis_v2.pth'))
    model10.load_state_dict(torch.load(f'./models/cat_eye_non_ulcerating_v2.pth'))
    model11.load_state_dict(torch.load(f'./models/cat_eye_blepharitis.pth'))
    
    model12.load_state_dict(torch.load(f'./models/dog_skin_plaque_v2.pth'))
    model13.load_state_dict(torch.load(f'./models/dog_skin_dandruff_v4.pth'))
    model14.load_state_dict(torch.load(f'./models/dog_skin_hyperpigmentation.pth'))
    model15.load_state_dict(torch.load(f'./models/dog_skin_pustule_v2.pth'))
    model16.load_state_dict(torch.load(f'./models/dog_skin_erosion.pth'))
    model17.load_state_dict(torch.load(f'./models/dog_skin_nodosity.pth'))
    
    model18.load_state_dict(torch.load(f'./models/cat_skin_pustule.pth'))
    model19.load_state_dict(torch.load(f'./models/cat_skin_dandruff.pth'))
    model20.load_state_dict(torch.load(f'./models/cat_skin_nodosity.pth'))
    
    models = {
        'dog_eye': [model1, model2, model3, model4, model5, model6],
        'cat_eye': [model7, model8, model9, model10, model11],
        'dog_skin': [model12, model13, model14, model15, model16, model17],
        'cat_skin': [model18, model19, model20]
    }
    return models

menu = {
        'dog_eye': ['conjunctivitis_v2', 'ulcerating', 'cataract', 'pigmentation', 'blepharitis', 'nuclear_sclerosis'],
        'cat_eye': ['corneal_ulcer_v2', 'corneal_sequesration', 'conjunctivitis_v2', 'non_ulcerating_v2', 'blepharitis'],
        'dog_skin': ['plaque_v2', 'dandruff_v4', 'hyperpigmentation', 'pustule_v2', 'erosion', 'nodosity'],
        'cat_skin': ['pustule', 'dandruff', 'nodosity']
    }

models = load_models()

def ai_predict(key, image):
    selected_models = models.get(key, [])
    selected_menu = menu.get(key, [])
    if not selected_models:
        raise HTTPException(status_code=400, detail="Invalid category or animal type")
    
    predictions = {}
    i=0
    for model in selected_models:
        model.eval()
        with torch.no_grad():
            predictions[selected_menu[i]]=(round(float(F.softmax(model(image.unsqueeze(0)).logits, dim=1)[0][1]), 4))
    return predictions