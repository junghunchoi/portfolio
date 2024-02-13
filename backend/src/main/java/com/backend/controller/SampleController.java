package com.backend.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@Log4j2
public class SampleController {

	@GetMapping("/hello")
	public void hell(Model model) {
		log.info("hello world");

		model.addAttribute("msg", "hello world");

	}
}
