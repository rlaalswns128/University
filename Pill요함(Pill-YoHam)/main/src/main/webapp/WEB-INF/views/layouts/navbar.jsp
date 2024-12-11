<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!-- 네비바 레이아웃 파일: navbar.jsp -->

<!-- Main Navigation Bar -->
<div class="navbar">
    <div class="navbar-left">
        <a href="/" class="logo">Health<br>Supplements</a>
    </div>
    <div class="navbar-center">
        <form action="/search" method="get" class="search-form">
            <input type="text" name="query" placeholder="건강식품 전체 검색" class="search-input">
            <button type="submit" class="search-button">
                <i class="fa fa-search"></i>
            </button>
        </form>
    </div>
    <div class="navbar-right user-icons">
        <a href="/login" class="login-link">로그인</a>
        <!-- <a href="/cart" class="cart-icon"><i class="fa fa-shopping-cart"></i></a> -->
    </div>
</div>

<!-- Category Links Section -->
<div class="category-links">
    <c:forEach var="category" items="${categoryList}">
        <a href="/category?categoryCode=${category.categoryCode}">
                ${category.categoryName}
        </a>
    </c:forEach>
</div>