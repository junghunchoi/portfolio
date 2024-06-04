package com.backend.utils;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum CacheType {

	MAIN_PROFILE("main", 3, 100),
	BOARDLIST_PROFILE("boardList", 3, 100),
	GALLERYLIST_PROFILE("galleryList", 3, 100),
	HELPLIST_PROFILE("helpList", 3, 100),
	NOTICELIST_PROFILE("noticeList", 3, 100);


	private final String cacheName;
	private final int expiredAfterWrite;
	private final int maximumSize;

}