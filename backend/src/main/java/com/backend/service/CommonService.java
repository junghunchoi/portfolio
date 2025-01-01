package com.backend.service;

import com.backend.entity.Category;

import java.util.List;
import java.util.Map;


public interface CommonService {

	Map<String, List<?>> listMainPage();
	List<Category> getCategoryList();

}
