package org.vsanyc.rest.client;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Ivan_Pukhov on 7/15/2016.
 */
@RestController
@RequestMapping("/remote")
public class RemoteRestController {

    private static final String REMOTE_REST_URL = "http://localhost:8080";
    private static final String ITEM_URL = "/item/";

    @RequestMapping("/item/{id}")
    public String getRemoteItemById(@PathVariable long id) {
        RestTemplate template = new RestTemplate();
        ResponseEntity<String> response = template.getForEntity(REMOTE_REST_URL + ITEM_URL + id, String.class);
        String body = response.getBody();
        return body;
    }
}
