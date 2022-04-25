package io.javabrains.topic;

import org.springframework.data.repository.CrudRepository;

// Will get all methods from CRUD
public interface TopicRepository extends CrudRepository<Topic, String> {
   
}
