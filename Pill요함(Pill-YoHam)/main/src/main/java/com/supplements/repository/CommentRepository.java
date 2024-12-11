package com.supplements.repository;

import com.supplements.document.Comment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends MongoRepository<Comment, String> {
    List<Comment> findByItemSeq(String itemSeq);  // 아이템에 대한 댓글 목록 조회
}