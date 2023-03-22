function childFriends(firstName, lastName, ...friends) {
    let count = 0;
    for (a of friends) {
      count += 1;
    }
    console.log("The", firstName, lastName, "has", count, "friends!");
    // ou só:  alert(`The ${firstName} ${lastName} has ${friends.length} friends!`);
}
  
childFriends("Beatriz", "Lisboa", "Carol", "Jessica", "Amendoim", "igor");
childFriends("Beatriz", "Lisboa");
childFriends("Beatriz", "Lisboa", "Carol", "Jessica");


