package com.backend.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;

@RestController
public class TestCont {

	@GetMapping("/api/item")
	private ArrayList<String> test() {

		return new ArrayList(Arrays.asList("안녕","test"));
	}
}
