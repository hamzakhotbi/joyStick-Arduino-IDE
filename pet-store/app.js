// ========================================
// MOCK DATA
// ========================================

const mockPets = [
    { id: 1, name: "Buddy", breed: "Golden Retriever", category: "Dogs", age: "2 months", gender: "Male", color: "Golden", price: 1200, image: "https://images.unsplash.com/photo-1633722715468-d690a24e7c95?w=400", rating: 5, vaccinated: true, traits: ["Friendly", "Playful", "House-trained"] },
    { id: 2, name: "Luna", breed: "Persian Cat", category: "Cats", age: "4 months", gender: "Female", color: "White", price: 800, image: "https://images.unsplash.com/photo-1612152605347-f93296cb657d?w=400", rating: 5, vaccinated: true, traits: ["Calm", "Affectionate", "Indoor"] },
    { id: 3, name: "Charlie", breed: "Labrador", category: "Dogs", age: "3 months", gender: "Male", color: "Black", price: 1000, image: "https://images.unsplash.com/photo-1591769225440-811ad7d6eca6?w=400", rating: 4, vaccinated: true, traits: ["Energetic", "Loyal", "Smart"] },
    { id: 4, name: "Bella", breed: "Poodle", category: "Dogs", age: "5 months", gender: "Female", color: "Apricot", price: 1500, image: "https://images.unsplash.com/photo-1516934024742-b461fba47600?w=400", rating: 5, vaccinated: true, traits: ["Intelligent", "Hypoallergenic", "Elegant"] },
    { id: 5, name: "Max", breed: "German Shepherd", category: "Dogs", age: "6 months", gender: "Male", color: "Black & Tan", price: 1300, image: "https://images.unsplash.com/photo-1589924691195-41432c84c161?w=400", rating: 5, vaccinated: true, traits: ["Protective", "Brave", "Obedient"] },
    { id: 6, name: "Milo", breed: "Siamese Cat", category: "Cats", age: "3 months", gender: "Male", color: "Cream & Brown", price: 700, image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?w=400", rating: 4, vaccinated: true, traits: ["Vocal", "Social", "Active"] },
    { id: 7, name: "Coco", breed: "Cockatiel", category: "Birds", age: "2 months", gender: "Male", color: "Grey & Yellow", price: 150, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400", rating: 5, vaccinated: true, traits: ["Musical", "Friendly", "Colorful"] },
    { id: 8, name: "Nemo", breed: "Clownfish", category: "Fish", age: "1 year", gender: "Male", color: "Orange & White", price: 50, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400", rating: 4, vaccinated: false, traits: ["Hardy", "Colorful", "Easy-care"] },
    { id: 9, name: "Daisy", breed: "Beagle", category: "Dogs", age: "4 months", gender: "Female", color: "Tri-color", price: 900, image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=400", rating: 5, vaccinated: true, traits: ["Curious", "Merry", "Gentle"] },
    { id: 10, name: "Simba", breed: "Maine Coon", category: "Cats", age: "5 months", gender: "Male", color: "Orange Tabby", price: 1100, image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=400", rating: 5, vaccinated: true, traits: ["Large", "Gentle Giant", "Fluffy"] },
    { id: 11, name: "Kiwi", breed: "Lovebird", category: "Birds", age: "6 months", gender: "Female", color: "Green & Red", price: 120, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400", rating: 4, vaccinated: true, traits: ["Affectionate", "Playful", "Pair-bonding"] },
    { id: 12, name: "Rocky", breed: "Bulldog", category: "Dogs", age: "7 months", gender: "Male", color: "Fawn", price: 1800, image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=400", rating: 4, vaccinated: true, traits: ["Calm", "Courageous", "Friendly"] },
    { id: 13, name: "Whiskers", breed: "British Shorthair", category: "Cats", age: "6 months", gender: "Male", color: "Blue Grey", price: 950, image: "https://images.unsplash.com/photo-1573865526739-10659fec780d?w=400", rating: 5, vaccinated: true, traits: ["Plush Coat", "Calm", "Independent"] },
    { id: 14, name: "Sunny", breed: "Canary", category: "Birds", age: "1 year", gender: "Male", color: "Yellow", price: 80, image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400", rating: 5, vaccinated: true, traits: ["Melodious", "Cheerful", "Active"] },
    { id: 15, name: "Pepper", breed: "Hamster", category: "Small Pets", age: "2 months", gender: "Female", color: "Brown & White", price: 30, image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400", rating: 4, vaccinated: false, traits: ["Tiny", "Nocturnal", "Low-maintenance"] },
    { id: 16, name: "Rex", breed: "Ball Python", category: "Reptiles", age: "1 year", gender: "Male", color: "Brown Pattern", price: 200, image: "https://images.unsplash.com/photo-1531386813667-92c543836e41?w=400", rating: 5, vaccinated: false, traits: ["Docile", "Unique", "Long-lived"] },
    { id: 17, name: "Coral", breed: "Betta Fish", category: "Fish", age: "6 months", gender: "Male", color: "Red & Blue", price: 25, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400", rating: 5, vaccinated: false, traits: ["Beautiful", "Territorial", "Easy-care"] },
    { id: 18, name: "Snowball", breed: "Rabbit", category: "Small Pets", age: "3 months", gender: "Female", color: "White", price: 60, image: "https://images.unsplash.com/photo-1585110396067-c3ded1ab5a4d?w=400", rating: 5, vaccinated: true, traits: ["Soft", "Gentle", "Social"] },
    { id: 19, name: "Zeus", breed: "Husky", category: "Dogs", age: "4 months", gender: "Male", color: "Grey & White", price: 1400, image: "https://images.unsplash.com/photo-1563889958749-6a18fd4a8caf?w=400", rating: 5, vaccinated: true, traits: ["Energetic", "Vocal", "Beautiful"] },
    { id: 20, name: "Shadow", breed: "Black Cat", category: "Cats", age: "1 year", gender: "Male", color: "Black", price: 400, image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400", rating: 4, vaccinated: true, traits: ["Mysterious", "Affectionate", "Agile"] }
];

const mockServices = [
    { id: 1, name: "Pet Grooming - Basic", icon: "fa-shower", price: "\$50", duration: "1 hour", description: "Includes bath, brush, nail trim, and ear cleaning." },
    { id: 2, name: "Pet Grooming - Premium", icon: "fa-spa", price: "\$80", duration: "2 hours", description: "Full grooming package with styling, teeth cleaning, and aromatherapy." },
    { id: 3, name: "Veterinary Consultation", icon: "fa-user-md", price: "\$75", duration: "30 min", description: "General health check-up with licensed veterinarian." },
    { id: 4, name: "Vaccination Service", icon: "fa-syringe", price: "\$45", duration: "20 min", description: "Core vaccinations and booster shots for your pet." },
    { id: 5, name: "Puppy Training", icon: "fa-graduation-cap", price: "\$60/session", duration: "45 min", description: "Basic obedience training for puppies up to 6 months." },
    { id: 6, name: "Advanced Training", icon: "fa-certificate", price: "\$80/session", duration: "1 hour", description: "Behavioral correction and advanced command training." },
    { id: 7, name: "Pet Daycare", icon: "fa-sun", price: "\$35/day", duration: "Full day", description: "Supervised playtime and socialization for your pet." },
    { id: 8, name: "Overnight Boarding", icon: "fa-moon", price: "\$50/night", duration: "Overnight", description: "Comfortable overnight stay with feeding and care." },
    { id: 9, name: "Pet Walking", icon: "fa-walking", price: "\$25/walk", duration: "30 min", description: "Professional dog walking service in your neighborhood." },
    { id: 10, name: "Pet Transportation", icon: "fa-car", price: "\$40/trip", duration: "Varies", description: "Safe transportation to vet appointments or other destinations." }
];

const mockTestimonials = [
    { id: 2, name: "Michael Chen", avatar: "MC", rating: 5, text: "The grooming service is exceptional! My Persian cat has never looked better. Professional, gentle, and they truly care about the animals." },
];

let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
let serviceRequests = JSON.parse(localStorage.getItem("serviceRequests")) || [];
let orders = JSON.parse(localStorage.getItem("orders")) || [];
let userPets = JSON.parse(localStorage.getItem("userPets")) || [];

document.addEventListener("DOMContentLoaded", () => { initializeApp(); });

function initializeApp() { updateAuthUI(); loadFeaturedPets(); loadTestimonials(); setupEventListeners(); updateCartBadge(); }
