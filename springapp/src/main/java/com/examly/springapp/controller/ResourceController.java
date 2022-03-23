package com.examly.springapp.controller;

import com.examly.springapp.model.ResourceModel;
import com.examly.springapp.service.ResourceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ResourceController {
    private ResourceService resourceService;
    @PostMapping("/home")
    public ResourceModel saveRes(@RequestBody ResourceModel res){
        System.out.println("RES"+res);
        return resourceService.saveResource(res);
    }
    @GetMapping("/home")
    public List<ResourceModel> getAllResources(){
        return resourceService.getResource();
    }
    @DeleteMapping("/home/{id}")
    public String delResById(@PathVariable("id") int id){
        return resourceService.deleteResource(id);
    }
   @PutMapping("/home/{id}")
    public ResourceModel updateRes(@PathVariable("id") int id,@RequestBody ResourceModel resupdate){
        return resourceService.updateResource(resupdate);
    }

}
