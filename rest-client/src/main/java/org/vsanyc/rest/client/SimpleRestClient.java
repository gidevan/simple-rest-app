package org.vsanyc.rest.client;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Map;

@Controller
@RequestMapping("/")
public class SimpleRestClient {


    @RequestMapping("/index")
    public String index(Map<String, Object> model) {
        return "index";
    }


}
