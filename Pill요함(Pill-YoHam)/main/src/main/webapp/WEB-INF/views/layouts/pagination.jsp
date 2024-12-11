<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<div class="pagination">
    <c:forEach var="page" begin="${startPage}" end="${endPage}">
        <a href="${url}&page=${page}&size=${size}"
           class="${page == currentPage ? 'active' : ''}">
                ${page + 1}
        </a>
    </c:forEach>

    <!-- 이전 페이지 그룹 -->
    <c:if test="${startPage > 0}">
        <a href="${url}&page=${startPage - 1}&size=${size}">&laquo; 이전</a>
    </c:if>

    <!-- 다음 페이지 그룹 -->
    <c:if test="${endPage < totalPages - 1}">
        <a href="${url}&page=${endPage + 1}&size=${size}">다음 &raquo;</a>
    </c:if>
</div>