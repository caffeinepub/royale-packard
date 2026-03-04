import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Time "mo:core/Time";
import Text "mo:core/Text";
import Order "mo:core/Order";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Char "mo:core/Char";

actor {
  type ProjectType = { #residential; #commercial; #interior };
  type ProjectStatus = { #completed; #ongoing };

  module ProjectType {
    public func compare(t1 : ProjectType, t2 : ProjectType) : Order.Order {
      switch (t1, t2) {
        case (#residential, #residential) { #equal };
        case (#residential, _) { #less };
        case (#commercial, #residential) { #greater };
        case (#commercial, #commercial) { #equal };
        case (#commercial, #interior) { #less };
        case (#interior, #interior) { #equal };
        case (#interior, _) { #greater };
      };
    };
  };

  module ProjectStatus {
    public func compare(s1 : ProjectStatus, s2 : ProjectStatus) : Order.Order {
      switch (s1, s2) {
        case (#completed, #completed) { #equal };
        case (#completed, #ongoing) { #less };
        case (#ongoing, #completed) { #greater };
        case (#ongoing, #ongoing) { #equal };
      };
    };
  };

  type ContactInquiry = {
    name : Text;
    phone : Text;
    email : Text;
    projectType : ProjectType;
    budgetRange : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type PropertyListing = {
    id : Nat;
    name : Text;
    location : Text;
    area : Nat;
    priceRange : Text;
    ptype : ProjectType;
    status : ProjectStatus;
    shortDescription : Text;
  };

  module PropertyListing {
    public func compareByType(p1 : PropertyListing, p2 : PropertyListing) : Order.Order {
      switch (ProjectType.compare(p1.ptype, p2.ptype)) {
        case (#equal) { Text.compare(p1.name, p2.name) };
        case (order) { order };
      };
    };
  };

  type FeaturedProject = {
    id : Nat;
    name : Text;
    location : Text;
    ptype : ProjectType;
    status : ProjectStatus;
    shortDescription : Text;
  };

  module FeaturedProject {
    public func compareByType(p1 : FeaturedProject, p2 : FeaturedProject) : Order.Order {
      switch (ProjectType.compare(p1.ptype, p2.ptype)) {
        case (#equal) { Text.compare(p1.name, p2.name) };
        case (order) { order };
      };
    };
  };

  let inquiries = List.empty<ContactInquiry>();
  let listings = Map.empty<Nat, PropertyListing>();
  let projects = Map.empty<Nat, FeaturedProject>();

  func normalizeText(text : Text) : Text {
    text.map(
      func(c) {
        if (c >= 'A' and c <= 'Z') {
          Char.fromNat32(c.toNat32() + 32);
        } else {
          c;
        };
      }
    );
  };

  public shared ({ caller }) func init() : async () {
    if (listings.isEmpty() and projects.isEmpty()) {
      let initialListings = [
        {
          id = 1;
          name = "Royal Residency";
          location = "New Delhi";
          area = 2500;
          priceRange = "2-3 Cr";
          ptype = #residential;
          status = #completed;
          shortDescription = "Luxury 3BHK apartments";
        },
        {
          id = 2;
          name = "Elite Towers";
          location = "Gurgaon";
          area = 3000;
          priceRange = "3-4 Cr";
          ptype = #residential;
          status = #ongoing;
          shortDescription = "Spacious 4BHK flats";
        },
        {
          id = 3;
          name = "Commercial Hub";
          location = "Noida";
          area = 5000;
          priceRange = "5-6 Cr";
          ptype = #commercial;
          status = #completed;
          shortDescription = "Premium office spaces";
        },
        {
          id = 4;
          name = "Interior Decor";
          location = "South Delhi";
          area = 1500;
          priceRange = "50-70 Lakhs";
          ptype = #interior;
          status = #completed;
          shortDescription = "Modern interiors for homes";
        },
        {
          id = 5;
          name = "Royal Commercial";
          location = "Central Delhi";
          area = 4000;
          priceRange = "4-5 Cr";
          ptype = #commercial;
          status = #ongoing;
          shortDescription = "Premium retail spaces";
        },
        {
          id = 6;
          name = "Luxury Villas";
          location = "Faridabad";
          area = 3500;
          priceRange = "3-4 Cr";
          ptype = #residential;
          status = #completed;
          shortDescription = "Exclusive villas with modern amenities";
        },
      ];

      let initialProjects = [
        {
          id = 1;
          name = "Grand Interiors";
          location = "Delhi NCR";
          ptype = #interior;
          status = #completed;
          shortDescription = "High-end home interiors";
        },
        {
          id = 2;
          name = "Commercial Spaces";
          location = "New Delhi";
          ptype = #commercial;
          status = #completed;
          shortDescription = "Modern office spaces";
        },
        {
          id = 3;
          name = "Residential Project";
          location = "Gurgaon";
          ptype = #residential;
          status = #ongoing;
          shortDescription = "Luxury apartments";
        },
        {
          id = 4;
          name = "Retail Interiors";
          location = "Noida";
          ptype = #interior;
          status = #completed;
          shortDescription = "Customized retail store interiors";
        },
      ];

      for (listing in initialListings.values()) {
        listings.add(listing.id, listing);
      };

      for (project in initialProjects.values()) {
        projects.add(project.id, project);
      };
    };
  };

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, projectType : ProjectType, budgetRange : Text, message : Text) : async () {
    let inquiry : ContactInquiry = {
      name;
      phone;
      email;
      projectType;
      budgetRange;
      message;
      timestamp = Time.now();
    };
    inquiries.add(inquiry);
  };

  public query ({ caller }) func getAllInquiries() : async [ContactInquiry] {
    inquiries.toArray();
  };

  public query ({ caller }) func getListings(filterType : ?ProjectType, filterStatus : ?ProjectStatus) : async [PropertyListing] {
    listings.values().toArray().filter(
      func(l) {
        let typeMatches = switch (filterType) {
          case (null) { true };
          case (?t) { l.ptype == t };
        };
        let statusMatches = switch (filterStatus) {
          case (null) { true };
          case (?s) { l.status == s };
        };
        typeMatches and statusMatches;
      }
    );
  };

  public query ({ caller }) func getListingById(id : Nat) : async PropertyListing {
    switch (listings.get(id)) {
      case (?listing) { listing };
      case (null) { Runtime.trap("Listing not found") };
    };
  };

  public query ({ caller }) func getAllProjects() : async [FeaturedProject] {
    projects.values().toArray();
  };

  public query ({ caller }) func getProjectsByType(filterType : ProjectType) : async [FeaturedProject] {
    let filtered = projects.values().toArray().filter(
      func(p) { p.ptype == filterType }
    );
    filtered.sort(FeaturedProject.compareByType);
  };
};
