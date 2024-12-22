package com.backend.controller;

import com.backend.common.codes.SuccessCode;
import com.backend.common.dto.ResultDTO;
import com.backend.dto.PageRequestDTO;
import com.backend.dto.PageResponseDTO;
import com.backend.dto.board.BoardDTO;
import com.backend.dto.board.BoardListDTO;
import com.backend.service.BoardService;
import com.backend.service.RetrospectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/retrospects")
@Log4j2
@RequiredArgsConstructor
public class RetrospectController {
    private final RetrospectService retrospectService;
    private final BoardService boardService;

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

    /**
     * 특정 회고을 조회합니다.
     *
     * @param id 조회할 회고의 식별자
     * @return 조회된 회고 정보를 포함한 응답 객체
     */
    @Operation(summary = "회고 조회", description = "특정 회고을 조회합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @GetMapping("/{id}")
    public ResponseEntity<ResultDTO<Object>> read(@PathVariable("id") Long id) {
        BoardDTO boardDTO = boardService.readOne(id);

        return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), boardDTO));
    }

    /**
     * 특정 회고을 수정합니다.
     *
     * @param boardDTO 수정할 회고 정보
     * @return 수정 결과 메시지를 포함한 응답 객체
     */
    @Operation(summary = "회고 수정", description = "특정 회고을 수정합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @PatchMapping("")
    public ResponseEntity<ResultDTO<String>> modify(@RequestBody @Valid BoardDTO boardDTO) {
        boardService.modify(boardDTO);

        return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.UPDATE_SUCCESS.getMessage()));
    }

    /**
     * 특정 회고을 삭제합니다.
     *
     * @param id 삭제할 회고의 식별자
     * @return 삭제 결과 메시지를 포함한 응답 객체
     */
    @Operation(summary = "회고 삭제", description = "특정 회고을 삭제합니다.")
    @ApiResponse(responseCode = "200", description = "성공", content = @Content(schema = @Schema(implementation = ResultDTO.class)))
    @DeleteMapping("/{id}")
    public ResponseEntity<ResultDTO<String>> remove(@PathVariable("id") Long id) {
        boardService.remove(id);

        return ResponseEntity.ok(ResultDTO.res(HttpStatus.OK, HttpStatus.OK.toString(), SuccessCode.DELETE_SUCCESS.getMessage()));
    }

}
