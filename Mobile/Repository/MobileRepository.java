package com.example.Mobile.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.Mobile.Entity.MobileEntity;

public interface MobileRepository  extends JpaRepository<MobileEntity, Integer>{

}
