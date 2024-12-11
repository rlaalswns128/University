<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ include file="/WEB-INF/views/layouts/pagination.jsp" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html>
<head>
    <title>Search Results</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet">
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <style>
        /* Custom styles */
        .search-results {
            margin: 20px;
        }
        .search-results h1 {
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

    <div class="search-results">
        <h1>검색 결과</h1>
        <c:choose>
            <c:when test="${not empty results}">
                <ul>
                    <c:forEach var="result" items="${results}">
                        <li>
                            <a href="/itemDescription?itemSeq=${result.item.itemSeq}">
                                    ${result.item.itemName} (제조사: ${result.item.entpName})
                            </a>
                        </li>
                    </c:forEach>
                </ul>
            </c:when>
            <c:otherwise>
                <p>검색 결과가 없습니다.</p>
            </c:otherwise>
        </c:choose>
    </div>
    <c:set var="url" value="/search?query=${query}" />
    <c:set var="size" value="10" />
</body>
</html>