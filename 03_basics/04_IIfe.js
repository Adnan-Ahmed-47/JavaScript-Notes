// Immediately Invoked Function Expression (IIFE)
// jaise hamne koi function likha usko turant hi execute karwana hai
// agar hame global pollution bhi rokna ho tab bhi ham ise use karte hain

// for eg: agar ham koi file likhte hain jisme sirf database connection hai aur ham chahte hain ki jaise hi hamara application start ho tab hi hamari file ke andar database ka connection start hojaye

// iife --> ()();
// () --> function definition 
// () --> execution call 
// ;  --> context ku stop karne ke liye. agar nahi lagaya toh dusra function invoke nahi hoga

// named iife
(function chai(){
    console.log("Database Connected");
})();

// simple/unnamed iife
( () => {
    console.log("Database connected Two");
}) ();

// if u want to pass a name then
( (name) => {
    console.log(`Database connected Two ${name}`);
}) ('Adnan');