<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html>
<head>
    <title>Category Products</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <style>
        /* Custom styles (copied from searchResults) */
        .category-results {
            margin: 20px;
        }
        .category-results h1 {
            color: #333;
            font-weight: bold;
            margin-bottom: 20px;
        }
        .product-card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
        }
        .product-info {
            flex: 3;
        }
        .product-info h5 {
            font-size: 1.25rem;
            margin-bottom: 10px;
            color: #006400;
        }
        .product-info p {
            margin: 0;
            color: #555;
        }
        .product-actions {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
        .product-actions button {
            background-color: #ff6b6b;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 10px 15px;
        }
        .product-actions button:hover {
            background-color: #ff4040;
        }
        .no-results {
            color: #888;
            text-align: center;
            font-size: 1.2rem;
        }
    </style>
</head>
<body>
<jsp:include page="/WEB-INF/views/layouts/navbar.jsp" />

<div class="category-results">
    <h1>${categoryName} 카테고리에 속한 제품 목록</h1>

    <c:if test="${not empty products}">
        <div>
            <c:forEach var="product" items="${products}">
                <div class="product-card">
                    <div class="product-info">
                        <h5>${product.item.itemName}</h5>
                        <p>제조사: ${product.item.entpName}</p>
                        <p>분류 번호: ${product.item.classNo}</p>
                    </div>
                    <div class="product-actions">
                        <a href="/itemDescription?itemSeq=${product.item.itemSeq}">
                            <button>자세히 보기</button>
                        </a>
                    </div>
                </div>
            </c:forEach>
        </div>
    </c:if>


    <%@ include file="/WEB-INF/views/layouts/pagination.jsp" %>

    <c:if test="${empty products}">
        <p class="no-results">해당 카테고리에 등록된 제품이 없습니다.</p>
    </c:if>
    <c:set var="url" value="/category?categoryCode=${categoryCode}" />
    <c:set var="size" value="10" />
</div>
</body>
</html>