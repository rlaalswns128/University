<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <title>Item Detail</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <style>
        .product-detail {
            display: flex;
            gap: 20px;
            padding: 20px;
            background-color: #f9f9f9;
            border-radius: 8px;
        }
        /* 
        .product-image {
            width: 40%;
        } 
        .product-image img {
            max-width: 100%;
            border-radius: 8px;
        } 
        */
        .product-info {
            width: 100%;
        }
        .product-info h1 {
            font-size: 24px;
            color: #333;
        }
        .product-info table {
            width: 100%;
            margin-top: 10px;
        }
        .product-info table th, .product-info table td {
            padding: 8px;
            border: 1px solid #ddd;
        }
        .comment-section {
            margin-top: 30px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .comment-section h3 {
            font-size: 20px;
            color: #333;
        }
        .comment {
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .comment:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
	<jsp:include page="/WEB-INF/views/layouts/navbar.jsp" /> 
    
    <div class="container mt-4">
        <div class="product-detail">
            <!-- <div class="product-image">
                <img src="path/to/product-image.jpg" alt="${item.itemName}">
            </div> -->
            
            <div class="product-info">
                <h1>${item.itemName}</h1>
                <table>
			        <tr><th>제품 이름</th><td>${item.itemName}</td></tr>
			        <tr><th>제조사</th><td>${item.entpName}</td></tr>
			        <tr><th>제품 번호</th><td>${item.itemNo}</td></tr>
			        <tr><th>허가 여부</th><td>${item.cancelCodeName}</td></tr>
			        <tr><th>불용 일자</th><td>${item.cancelDate}</td></tr>
			        <tr><th>주 성분</th><td>${item.mainIngr}</td></tr>
			        <tr><th>추가 성분</th><td>${item.aditIngr}</td></tr>
			        <tr><th>분류 이름</th><td>${item.classNoName}</td></tr>
			        <tr><th>신고 여부</th><td>${item.permitKindCodeNm}</td></tr>
			        <tr><th>제조국</th><td>${item.manufCountryNames}</td></tr>
			        <tr><th>주의-참고사항</th><td>${item.eeDocData}</td></tr> <!-- ? item.udDocData ? item.nbDocData} -->\
			        <tr><th>사업자 등록 번호</th><td>${item.bizrno}</td></tr>
    			</table>
            </div>
        </div>

        <div class="comment-section">
            <h3>댓글 목록</h3>
            <c:if test="${not empty comments}">
                <c:forEach var="comment" items="${comments}">
                    <div class="comment">
                        <p><strong>이름:</strong> ${comment.username}</p>
                        <p><strong>평점:</strong> ${comment.rating}</p>
                        <p>${comment.content}</p>
                    </div>
                </c:forEach>
            </c:if>
            <c:if test="${empty comments}">
                <p>댓글이 없습니다. 첫 댓글을 남겨보세요!</p>
            </c:if>
        </div>

        <div class="mt-4">
            <jsp:include page="/WEB-INF/views/layouts/commentSection.jsp" />
        </div>

        <a href="search?query=${sessionScope.searchQuery != null ? sessionScope.searchQuery : ''}"
           class="btn btn-secondary mt-4">
            뒤로 가기
        </a>
    </div>
</body>
</html>