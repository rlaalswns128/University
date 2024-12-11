package com.supplements.service;

import com.supplements.document.Category;
import com.supplements.document.Item;
import com.supplements.document.Supplements;
import com.supplements.dto.ItemDTO;
import com.supplements.dto.SupplementsDTO;
import com.supplements.repository.CategoryRepository;
import com.supplements.repository.SupplementsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class SearchService {

    private final SupplementsRepository supplementsRepository;

    @Autowired
    public SearchService(SupplementsRepository supplementsRepository) {
        this.supplementsRepository = supplementsRepository;
    }

    /**
     * CLASS_NO 리스트를 기반으로 제품 목록 조회
     */
    public List<SupplementsDTO> findByClassNo(List<String> classNos) {
        if (classNos == null || classNos.isEmpty()) {
            return List.of(); // 빈 리스트 반환
        }
        return supplementsRepository.findByClassNoIn(classNos)
                .stream()
                .map(this::toSupplementsDTOForDetail)
                .collect(Collectors.toList());
    }

    /**
     * 검색 기능: ITEM_NAME 및 CLASS_NO_NAME 기준으로 검색
     */
    public List<SupplementsDTO> search(String query) {
        // ITEM_NAME 및 CLASS_NO_NAME에서 검색
        List<Supplements> results = supplementsRepository.findByItemNameOrClassNoName(query);

        if (results.isEmpty()) {
            // 필요한 경우 로그 추가 가능
            System.out.println("No results found for query: " + query);
        }

        // 검색 결과를 DTO로 변환
        return results.stream()
                .map(this::toSupplementsDTOForSearch)
                .collect(Collectors.toList());
    }

    /**
     * itemSeq로 제품 상세 정보 조회
     */
    public SupplementsDTO getItemByItemSeq(String itemSeq) {
        return supplementsRepository.findByItem_ItemSeq(itemSeq)
                .map(this::toSupplementsDTOForDetail)
                .orElse(null);
    }

    /**
     * 검색용 SupplementsDTO 변환
     */
    private SupplementsDTO toSupplementsDTOForSearch(Supplements supplements) {
        SupplementsDTO dto = new SupplementsDTO();
        dto.setId(supplements.getId());
        dto.setItem(toItemDTO(supplements.getItem(), true)); // 검색용
        return dto;
    }

    /**
     * 상세 페이지용 SupplementsDTO 변환
     */
    private SupplementsDTO toSupplementsDTOForDetail(Supplements supplements) {
        SupplementsDTO dto = new SupplementsDTO();
        dto.setId(supplements.getId());
        dto.setItem(toItemDTO(supplements.getItem(), false)); // 상세 페이지용
        return dto;
    }

    /**
     * 검색용 ItemDTO 변환 (ITEM_NAME 길이 제한 적용)
     */
    private ItemDTO toItemDTO(Item item, boolean isForSearch) {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setItemSeq(item.getItemSeq());

        // 검색용 ITEM_NAME 길이 제한 적용
        if (isForSearch) {
            String itemName = item.getItemName();
            itemDTO.setItemName((itemName != null && itemName.length() > 20) ? itemName.substring(0, 20) + "..." : itemName);
        } else {
            itemDTO.setItemName(item.getItemName()); // 원본 그대로 전달
        }

        itemDTO.setEntpName(item.getEntpName());
        itemDTO.setItemPermitDate(item.getItemPermitDate());
        itemDTO.setItemNo(item.getItemNo());
        itemDTO.setCancelCodeName(item.getCancelCodeName());
        itemDTO.setCancelDate(item.getCancelDate());
        itemDTO.setMainIngr(item.getMainIngr());
        itemDTO.setAditIngr(item.getAditIngr());
        itemDTO.setClassNo(item.getClassNo());
        itemDTO.setClassNoName(item.getClassNoName());
        itemDTO.setPermitKindCodeNm(item.getPermitKindCodeNm());
        itemDTO.setIndutyCode(item.getIndutyCode());
        itemDTO.setManufCountryNames(item.getManufCountryNames());
        itemDTO.setEeDocData(item.getEeDocData());
        itemDTO.setUdDocData(item.getUdDocData());
        itemDTO.setNbDocData(item.getNbDocData());
        itemDTO.setEntpNo(item.getEntpNo());
        itemDTO.setEntpSeq(item.getEntpSeq());
        itemDTO.setBizrno(item.getBizrno());

        return itemDTO;
    }
}