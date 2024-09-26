// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GPTMembership is ERC721 {
    address public owner;
    uint256 public membershipTypes;
    uint256 public totalMemberships;

    string public MY_CONTRACT = "DAULAT HUSSAIN";

    struct Membership {
        uint256 id;
        string name;
        uint256 cost;
        string date;
    }

    struct UserMembership{
        uint256 id;
        uint256 membershipId;
        address addressUser;
        uint256 cost;
        string expireDate;
    }

    mapping(address => UserMembership) userMemberships;
    mapping(uint256 => Membership) memberships;
    mapping(uint256 => mapping(address => bool)) public hasBought;
    mapping(uint256 => mapping(uint256 => address)) public membershipTaken;
    mapping(uint256 => uint256[]) membershipsTaken;

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor(
        string memory _name,
        string memory _symbol
    ) ERC721(_name, _symbol) {
        owner = msg.sender;
    }

    function list(
        string memory _name,
        uint256 _cost,
        string memory _date
    ) public onlyOwner {
        membershipTypes++;
        memberships[membershipTypes] = Membership(
            membershipTypes,
            _name,
            _cost,
            _date
        );
    }

    function mint(uint256 _membershipId, address _user , string memory _expireDate) public payable {
        // Require that _id is not 0 or less than total occasions...
        require(_membershipId != 0);
        require(_membershipId <= membershipTypes);

        // Require that ETH sent is greater than cost...
        require(msg.value >= memberships[_membershipId].cost, "Insufficent balance");
        totalMemberships++;

        userMemberships[_user] = UserMembership(
         totalMemberships,
         _membershipId,
         _user,
         memberships[_membershipId].cost,
         _expireDate
        );

        hasBought[_membershipId][msg.sender] = true; // <-- Update buying status
        membershipTaken[_membershipId][totalMemberships] = msg.sender; // <-- Assign seat

        membershipsTaken[_membershipId].push(totalMemberships); // <-- Update seats currently taken

        
        _safeMint(msg.sender, totalMemberships);
    }

    function getMembership(uint256 _membershipId) public view returns (Membership memory) {
        return memberships[_membershipId];
    }

    function getMembershipsTaken(uint256 _membershipId) public view returns (uint256[] memory) {
        return membershipsTaken[_membershipId];
    }

    function withdraw() public onlyOwner {
        (bool success, ) = owner.call{value: address(this).balance}("");
        require(success);
    }

    function getUserMembership(address _address) public view returns (UserMembership memory){
        return userMemberships[_address];
    }
}
