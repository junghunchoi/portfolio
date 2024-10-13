package com.backend.controller;

import com.backend.common.dto.ResultDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.service.RetrospectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/retrospects")
@Log4j2
@RequiredArgsConstructor
public class RetrospectController {
    private final RetrospectService retrospectService;

    /**
     * 페이지 요청 정보를 기반으로 게시물 목록과 각 게시물의 댓글 수를 조회합니다.
     *
     * @param pageRequestDTO 페이지네이션 정보를 담은 DTO
     * @return 페이징 처리된 게시물 목록과 상태 코드를 포함하는 ResponseEntity 객체
     */
    @Operation(summary = "게시물 목록 조회", description = "페이지 요청 정보를 기반으로 게시물 목록과 각 게시물의 댓글 수를 조회합니다.")
    @ApiResponse(responseCode = "200", description = "성공",
            content = @Content(schema = @Schema(implementation = PageResponseDTO.class)))
    @GetMapping()
    public ResponseEntity<ResultDTO<Object>> list(PageRequestDTO pageRequestDTO) {
        PageResponseDTO<BoardListDTO> responseDTO = retrospectService.list(pageRequestDTO);
        return ResponseEntity.ok(
                ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), responseDTO));
    }

}
