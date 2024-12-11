<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!-- /WEB-INF/views/layouts/commentSection.jsp -->
<form action="/comments/add" method="post">
    <input type="hidden" name="itemSeq" value="${item.itemSeq}">
    <div class="form-group">
        <label for="username">이름:</label>
        <input type="text" id="username" name="username" class="form-control">
    </div>
    <div class="form-group">
        <label for="content">댓글:</label>
        <textarea id="content" name="content" class="form-control"></textarea>
    </div>
    <div class="form-group">
        <label for="rating">평점:</label>
        <select id="rating" name="rating" class="form-control">
            <c:forEach var="i" begin="1" end="5">
                <option value="${i}">${i}</option>
            </c:forEach>
        </select>
    </div>
    <button type="submit" class="btn btn-primary">댓글 등록</button>
</form>
</form>