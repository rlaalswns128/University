<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iHerb Style Layout</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>

<jsp:include page="/WEB-INF/views/layouts/navbar.jsp" /> 

<!-- Category Section -->
<div class="container category-section mt-5 pt-5">
    <div class="category-item"><i class="fas fa-pills"></i><p>보충제</p></div>
    <div class="category-item"><i class="fas fa-dumbbell"></i><p>스포츠 보충제</p></div>
    <div class="category-item"><i class="fas fa-bath"></i><p>목욕 & 퍼스널케어</p></div>
    <div class="category-item"><i class="fas fa-heart"></i><p>뷰티</p></div>
    <div class="category-item"><i class="fas fa-apple-alt"></i><p>식료품</p></div>
    <div class="category-item"><i class="fas fa-home"></i><p>홈</p></div>
    <div class="category-item"><i class="fas fa-baby"></i><p>베이비 & 키즈</p></div>
    <div class="category-item"><i class="fas fa-paw"></i><p>반려동물</p></div>
</div>

<!-- Suggested Tags Section -->[]
<div class="container mt-4">
    <h5>고객님을 위한 추천 상품</h5>
    <div class="suggested-tags">
        <div class="tag-item">체내 건강 지원</div>
        <div class="tag-item">면역력 강화</div>
        <div class="tag-item">건강한 노화</div>
        <div class="tag-item">비타민</div>
        <div class="tag-item">GLP-1 지원</div>
        <div class="tag-item">심혈관계</div>
        <div class="tag-item">소화기계</div>
        <div class="tag-item">미네랄</div>
        <div class="tag-item">장</div>
        <div class="tag-item">항산화제</div>
        <div class="tag-item">방광</div>
        <div class="tag-item">허브</div>
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>