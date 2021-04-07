pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

contract PersonDID {
    struct Person {
        uint id;
        uint age;
        string name;
        string experience;
    }
    
    event AddPerson(uint8 id, uint8 age, string name, uint timestamp);
    
    Person admin;
    Person[] persons;
    mapping(address => Person) public PersonInfo;
    mapping(address=> bool) public isPersonExsist;
    
    constructor (address ip, uint8 id, string memory name, uint8 age,string memory experience) public {
        admin = Person(id, age, name,experience);
        Person memory p = Person(id, age, name,experience);
        persons.push(p);
        PersonInfo[msg.sender] = p;
        isPersonExsist[msg.sender] = true;
    }
    
    function getNumberOfPersons() view public returns (uint256) {
        return persons.length;
    }
    
    function addPerson(uint id, uint8、 age, string memory name,string memory experience) public returns (bool) {
        require(!((id == 0) || age == 0), "persons info can not be empty!!");
        require(!isPersonExsist[msg.sender], "person can not exsist !!");
        Person memory person = Person(id, age, name,experience);
        persons.push(person);
        PersonInfo[msg.sender] = Person(id, age, name,experience);
        isPersonExsist[msg.sender] = true;
        emit AddPerson(id, age, name, experience,now);
    }
    
    function setPersonAgeSto(address ip, uint、 age) public {
        Person storage p = PersonInfo[ip];
        p.age = age;
    }
    
    function setPersonAgeMem(address ip, uint age) public {
        Person memory p = PersonInfo[ip];
        p.age = age;
    }
    
    function getPersonAge(address ip) public view returns (uint) {
        return PersonInfo[ip].age;
    }
    function getPersonwork(address ip) public {
        Person storage s = getPersonwork[ip];
        p.experience = experience;
    }
    
}
