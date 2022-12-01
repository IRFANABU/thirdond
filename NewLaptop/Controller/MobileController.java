package com.example.NewLaptop.Controller;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Mobile.Entity.MobileEntity;
import com.example.Mobile.Repository.MobileRepository;

@RestController
@Repository
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value="/api")
public class MobileController {
	
	@Autowired
	MobileRepository mr;
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(value="/mobile")
	public MobileEntity postValues(@RequestBody MobileEntity m) {
		return mr.save(m);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(value="/mobile")
	public List<MobileEntity> getAll(){
		return mr.findAll();
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(value="/mobile/{id}")
	public ResponseEntity<MobileEntity> delete(@PathVariable int id){
		MobileEntity mob=mr.findById(id).get();
		mr.deleteById(id);
		return ResponseEntity.ok(mob);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping(value="/mobile/{id}")
	public ResponseEntity<MobileEntity> updatebyId(@PathVariable int id, @RequestBody MobileEntity m){
		MobileEntity mob=mr.findById(id).get();
//		mob.setBrand(m.getBrand());
		mob.setColor(m.getColor());
		mob.setRam(m.getRam());
		mob.setPrice(m.getPrice());
		mr.save(mob);
		return ResponseEntity.ok(mob);	
	}
	@GetMapping(value="mobile/{id}")
	public MobileEntity getbyid (@PathVariable int id) {
	return mr.findById(id).get();
		
	}
	
	

}
