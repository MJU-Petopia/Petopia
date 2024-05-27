export default function jaccardSimilarity(str1, str2) {
    // 문자열을 소문자로 변환하여 대소문자 구분 없이 비교
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
  
    // 문자열을 집합으로 변환
    const set1 = new Set(str1.split(''));
    const set2 = new Set(str2.split(''));
  
    // 교집합과 합집합 계산
    const intersection = new Set([...set1].filter(x => set2.has(x)));
    const union = new Set([...set1, ...set2]);
  
    // 자카드 유사도 계산
    return intersection.size / union.size;
  }