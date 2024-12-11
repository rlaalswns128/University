package com.supplements.repository;

import com.supplements.document.Supplements;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface SupplementsRepository extends MongoRepository<Supplements, String> {

    // ITEM_NAME 및 CLASS_NO_NAME 기준 검색
    @Query("{$or: [{'item.ITEM_NAME': { $regex: ?0, $options: 'i' }}, {'item.CLASS_NO_NAME': { $regex: ?0, $options: 'i' }}], 'item.CANCEL_CODE_NAME': { $nin: ['취하', '폐업'] }}")
    List<Supplements> findByItemNameOrClassNoName(String query);

    @Query("{ 'item.ITEM_SEQ': ?0 }")
    Optional<Supplements> findByItem_ItemSeq(String itemSeq);

    /**
     * CLASS_NO에 해당하는 제품 목록 조회
     */
    @Query("{ 'item.CLASS_NO': { $in: ?0 }, 'item.CANCEL_CODE_NAME': { $nin: ['취하', '폐업'] } }")
    List<Supplements> findByClassNoIn(List<String> classNos);
}