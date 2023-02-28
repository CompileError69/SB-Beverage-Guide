// Define the flashcards data as an array of objects
const flashcardsData = [
    // Hot coffee
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/espresso.jpg",
        name: "Espresso (E)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: Solo - 1, Doppio - 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Sugar</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        final_steps: "Serve in short cup (to go). Serve in a demitasse (dine in)"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/espresso_con_panna.jpg",
        name: "Espresso Con Panna (ECP)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: Solo - 1, Doppio - 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Sugar</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        final_steps: "Add single layer of whipped cream. Serve in short cup (to go). Serve in a demitasse (dine in)"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/espresso_macchiato.jpg",
        name: "Espresso Macchiato (EM)",
        steam_milk: "Milk to lowest line on pitcher. Aerate 6-8 secs",
        shots: "<span class='bold-text'>Shots</span>: Solo - 1, Doppio - 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Sugar</span>: 1, 2 <span class='red-text'>[if requested]</span>",
        final_steps: "Use spoon to place foam on espresso. Serve in short cup (to go). Serve in a demitasse (dine in)"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/caffe_americano.jpg",
        name: "Caffe Americano (A)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 3, 4",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Sugar</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Fill with hot water"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/caffe_latte.jpg",
        name: "Caffe Latte (L)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Fill cup with steamed milk"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/cappuccino.jpg",
        name: "Cappuccino (C)",
        steam_milk: "Milk below appropriate line on pitcher. Aerate 6-8 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 1, 2, 3, 4 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 1, 2, 3, 4 <span class='red-text'>[if requested]</span>",
        final_steps: "Free pour milk into cup. Use bar spoon for: Dry - More foam. Wet - Less foam"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/flat_white.jpg",
        name: "Flat White (FW)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Shots</span>: 2, 2, 3, 4",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Free pour milk into cup, end with a small dot of foam"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/flat_white.jpg",
        name: "Ristretto Bianco (RB)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Ristretto Shots</span>: 2, 3, 4, 4",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Free pour milk into cup. End with a small dot of foam"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/caffe_mocha.jpg",
        name: "Caffe Mocha (M)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4, 5",
        sc_syrup: "",
        final_steps: "Swirl espresso and mocha sauce. Seperate foam and milk. Top with whipped cream"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/white_chocolate_mocha.jpg",
        name: "White Chocolate Mocha (WM)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>White Mocha Sauce</span>: 2, 3, 4, 5",
        sc_syrup: "",
        final_steps: "Swirl espresso and white mocha sauce. Seperate foam and milk. Top with whipped cream"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/caramel_macchiato.jpg",
        name: "Caramel Macchiato (CM)",
        steam_milk: "Milk to appropriate line on pitcher. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Vanilla Concentrate</span>: 1, 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 1, 2, 3, 4",
        final_steps: "Free pour milk into cup. Pour shots through foam. Top with caramel drizzle"
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/oatmilk_cocoa_macchiato.jpg",
        name: "Oatmilk Cocoa Macchiato (OCM)",
        steam_milk: "Oatmilk to appropriate line on pitcher. Aerate 6-8 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 1, 2, 3, 4",
        sc_syrup: "",
        final_steps: "Swirl oatmilk and mocha sauce. Pour shots through foam. Top with chocolate sauce."
    },
    {
        category: "Hot Coffee",
        image: "hot_coffee_img/brewed_coffee.jpg",
        name: "Brewed Coffee",
        steam_milk: "",
        shots: "",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Fill cup with brewed coffee. Milk requested at the side. Fill in sampling cup"
    },

    // Iced coffee
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_caffe_americano.jpg",
        name: "Iced Caffe Americano (A)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Concentrate</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Add cold water below upper line. Add shots. Add ice"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_caffe_latte.jpg",
        name: "Iced Caffe Latte (L)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Add milk below upper line. Add shots. Add ice"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_cappuccino.jpg",
        name: "Iced Cappuccino (C)",
        steam_milk: "Milk below appropriate line on pitcher. Aerate 6-8 secs",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4 <span class='red-text'>[if requested]</span>",
        final_steps: "Add milk below middle line. Add shots. Add ice. Add foam"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_caffe_mocha.jpg",
        name: "Iced Mocha (M)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 3, 4, 5</span>",
        sc_syrup: "",
        final_steps: "Swirl espresso and mocha sauce. Add milk to upperline. Add ice. Add whipped cream"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_white_chocolate_mocha.jpg",
        name: "Iced White Chocolate Mocha (WM)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>White Mocha Sauce</span>: 3, 4, 5",
        sc_syrup: "",
        final_steps: "Swirl espresso and white mocha sauce. Add milk to upperline. Add ice. Add whipped cream"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_caramel_macchiato.jpg",
        name: "Iced Caramel Macchiato (CM)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>Vanilla Concentrate</span>: 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4",
        final_steps: "Add milk to upper line. Add ice. Add shots. Top with caramel drizzle."
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/iced_oatmilk_cocoa_macchiato.jpg",
        name: "Iced Oatmilk Cocoa Macchiato (OCM)",
        steam_milk: "",
        shots: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4",
        sc_syrup: "",
        final_steps: "Add some oatmilk and swirl with mocha sauce. Add oatmilk to upperline. Add ice. Add shots. Top with chocolate sauce"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/cold_brew.jpg",
        name: "Cold Brew (CB)",
        steam_milk: "",
        shots: "",
        concentrate: "<span class='bold-text'>Concentrate</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Add cold brew to bottom line. Add cold water to upper line. Add ice"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/cold_brew_with_milk.jpg",
        name: "Cold Brew with Milk (CB - F)",
        steam_milk: "",
        shots: "",
        concentrate: "<span class='bold-text'>Concentrate</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Add cold brew to bottom line. Add cold water to middle line. Add milk to upperline. Add ice"
    },
    {
        category: "Iced Coffee",
        image: "iced_coffee_img/vanilla_sweet_cream_cold_brew.jpg",
        name: "Vanilla Sweet Cream Cold Brew (VSC)",
        steam_milk: "",
        shots: "",
        concentrate: "<span class='bold-text'>Concentrate</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Add cold brew to bottom line. Add cold water to upper line. Add ice. Top with sweet cream"
    },

    // Hot tea
    {
        category: "Hot Tea",
        image: "hot_tea_img/earl_grey_tea.jpg",
        name: "Brewed Tea (Any tea)",
        steam_milk: "",
        shots: "<span class='bold-text'>Sachet(s)</span>: 1, 1, 1, 2",
        concentrate: "<span class='bold-text'>Concentrate</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5 <span class='red-text'>[if requested]</span>",
        final_steps: "Fill with hot water"
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/earl_grey_tea.jpg",
        name: "Tea with Ruby Grapefruit and Honey (HRB?)",
        steam_milk: "<span class='bold-text'>Grapefruit Sauce</span>: 1, 2, 3, 4",
        shots: "<span class='bold-text'>Zen Cloud Oolong Sachet(s)</span>: 1, 1, 1, 2",
        concentrate: "",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4, 5",
        final_steps: "Fill with hot water. Stir."
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/pure_matcha_latte.jpg",
        name: "Pure Matcha Latte (PML)",
        steam_milk: "",
        shots: "<span class='bold-text'>Pure Matcha Powder</span>: 1, 2, 3, 4",
        concentrate: "<span class='bold-text'>Steam Milk</span>: Aerate 1-3 secs",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 1, 2, 3, 4",
        final_steps: "Pour contents into cup"
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/chai_tea_latte.jpg",
        name: "Chai Tea Latte (Ch)",
        steam_milk: "Milk to short line for S, T, G. Tall line for V. Aerate 1-3 secs",
        shots: "",
        concentrate: "<span class='bold-text'>Chai Concentrate</span>: 2, 3, 4, 5",
        sc_syrup: "",
        final_steps: "Fill cup half full of hot water. Fill cup with steamed milk."
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/hojicha_tea_latte.jpg",
        name: "Hojicha Tea Latte (HTL)",
        steam_milk: "Milk to appropriate line on pitcher",
        shots: "<span class='bold-text'>Hojicha Powder</span>: 1, 2, 3, 4",
        concentrate: "<span class='bold-text'>Steam Milk</span>: Aerate 1-3 secs",
        sc_syrup: "",
        final_steps: "Pour contents into cup"
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/earl_grey_tea_latte.jpg",
        name: "Earl Grey Tea Latte (EGTL)",
        steam_milk: "Milk to short line for S, T, G. Tall line for V. Aerate 1-3 secs",
        shots: "<span class='bold-text'>Earl Grey Tea Sachet(s)</span>: 1, 1, 2, 2",
        concentrate: "<span class='bold-text'>Vanilla Concentrate</span>: 2, 3, 4, 5",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4, 5",
        final_steps: "Fill cup half full of water. Fill cup with steamed milk."
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/english_breakfast_tea_latte.jpg",
        name: "English Breakfast Tea Latte (EBTL)",
        steam_milk: "Milk to short line for S, T, G. Tall line for V. Aerate 1-3 secs",
        shots: "<span class='bold-text'>English Breakfast Tea Sachet(s)</span>: 1, 1, 2, 2",
        concentrate: "",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4, 5",
        final_steps: "Fill cup half full of water. Full cup with steamed milk"
    },
    {
        category: "Hot Tea",
        image: "hot_tea_img/pure_matcha_and_espresso_fusion.jpg",
        name: "Pure Matcha & Espresso Fusion (PMEF)",
        steam_milk: "Milk to appropriate line on pitcher",
        shots: "<span class='bold-text'>Pure Matcha Powder</span>: 2, 2, 3, 4. Aerate 1-3 secs",
        concentrate: "<span class='bold-text'>Shots</span>: 1, 1, 2, 2",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 2, 2, 3, 4",
        final_steps: "Pour contents into cup. Slowly pour shots through foam."
    },

    // Iced tea
    {
        category: "Iced Tea",
        image: "iced_tea_img/shaken_iced_tea_with_ruby_grapefruit_and_honey.jpg",
        name: "Shaken Iced Tea with Ruby Grapefruit and Honey",
        steam_milk: "<span class='bold-text'>Grapefruit Sauce</span>: 2, 3, 4 into shaker",
        shots: "<span class='bold-text'>Teavana Tea</span>: Fill shaker with tea to line 1 on shaker",
        concentrate: "<span class='bold-text'>Cold water</span>: Add cold water to line 2",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4",
        final_steps: "Add ice. Shake 10 times"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_pure_matcha_latte.jpg",
        name: "Iced Pure Matcha Latte (PML)",
        steam_milk: "Milk to middle line on cup. Pour milk into blender",
        shots: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Pure Matcha Powder</span>: 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Blend</span>: Press #1",
        final_steps: "Pour contents into cup. Add ice"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_chai_tea_latte.jpg",
        name: "Iced Chai Tea Latte (Ch)",
        steam_milk: "<span class='bold-text'>Chai Concentrate</span>: 3, 4, 5",
        shots: "Milk to upper line on cup. No water added.",
        concentrate: "",
        sc_syrup: "",
        final_steps: "Add ice"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_hojicha_tea_latte.jpg",
        name: "Iced Hojicha Tea Latte",
        steam_milk: "Milk to line 2 on shaker. Add ice",
        shots: "<span class='bold-text'>Hojicha Powder</span>: 2, 3, 4",
        concentrate: "",
        sc_syrup: "",
        final_steps: "Shake 10 times. Pour contents into cup"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/.jpg",
        name: "Iced Black Tea Latte / Iced Golden Monkey Latte (BTL)",
        steam_milk: "<span class='bold-text'>Classic Syrup</span>: 3, 4, 5",
        shots: "Tea concentrate to middle line on cup",
        concentrate: "Milk to upper line on cup",
        sc_syrup: "",
        final_steps: "Add ice"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_shaken_strawberry_tea_lemonade.jpg",
        name: "Iced Shaken Strawberry Tea Lemonade (STL)",
        steam_milk: "Tea concentrate to line 1 on shaker",
        shots: "Lemonade to line 2. Strawberry sauce to line 3",
        concentrate: "",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 1, 2, 3",
        final_steps: "Add ice. Shake 10 times. Pour contents into cup"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_shaken_hibiscus_tea_with_pomegranate_pearls.jpg",
        name: "Iced Shaken Hibiscus Tea with Pomegranate Pearls (HTP)",
        steam_milk: "<span class='bold-text'>Pomegranate Pearls</span>: 2, 3, 4",
        shots: "Tea concentrate to line 1 on shaker. Cold water to line 2",
        concentrate: "",
        sc_syrup: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4",
        final_steps: "Add ice. Shake 10 times. Pour contents into cup"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/iced_pure_matcha_and_espresso_fusion.jpg",
        name: "Iced Pure Matcha & Espresso Fusion (PMEF)",
        steam_milk: "Cold water to line 1 on shaker. Pour water into blender",
        shots: "<span class='bold-text'>Pure Matcha Powder</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4. Press #1. Pour contents into cup",
        sc_syrup: "<span class='bold-text'>Shots</span>: 1, 2, 2",
        final_steps: "Add ice. Add milk. Add shots"
    },
    {
        category: "Iced Tea",
        image: "iced_tea_img/frozen_honey_ruby_grapefruit_black_tea.jpg",
        name: "Frozen Honey Ruby Grapefruit Black Tea (HRB)",
        steam_milk: "Lemonade to lower line on cup. Pour lemonade into blender",
        shots: "<span class='bold-text'>Grapefruit Sauce</span>: 2, 3, 4. Add ice. Press #1",
        concentrate: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4",
        sc_syrup: "Black Tea to lower line on cup",
        final_steps: "Add blender contents into cup. 1 scoop grapefruit sauce"
    },

    // Frappe Beverages
    {
        category: "Frappe",
        image: "frappe_beverage_img/coffee_frappe.jpg",
        name: "Coffee Frappuccino (CF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4. Milk to lower line on cup",
        shots: "Pour contents into blender. Add ice",
        concentrate: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4",
        sc_syrup: "Press #1",
        final_steps: "Pour contents into cup."
    },
    {
        category: "coffee_Frappe",
        image: "frappe_beverage_img/.jpg",
        name: "Decaf Coffee Frappucino (CF)",
        steam_milk: "<span class='bold-text'>Decaf Shots</span>: 1, 2, 3",
        shots: "Add shots to cup. Milk to lower line on cup. Pour contents into blender. Add ice",
        concentrate: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4",
        sc_syrup: "Press #1",
        final_steps: "Pour contents into cup"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/espresso_frappe.jpg",
        name: "Espresso Frappucino (EF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "<span class='bold-text'>Shots</span>: 1",
        concentrate: "Milk to lower line on cup. Pour contents into blender. Add ice",
        sc_syrup: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4",
        final_steps: "Press #1. Pour contents into cup"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/caramel_frappe.jpg",
        name: "Caramel Frappuccino (CRF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "Milk to lower line on cup. Pour contents into blender",
        concentrate: "<span class='bold-text'>Caramel Concentrate</span>: 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4. Add ice",
        final_steps: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4. Add ice. Press #1. Top with whipped cream and caramel sauce"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/mocha_frappe.jpg",
        name: "Mocha Frappucino (MF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "Milk to lower line on cup. Pour contents into blender",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/dark_mocha_frappe.jpg",
        name: "Dark Mocha Frappucino (DMF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "Milk to lower line on cup. Pour contents into blender",
        concentrate: "<span class='bold-text'>Dark Mocha Powder</span>: 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Frappe Chips</span>: 2, 3, 4. Add ice",
        final_steps: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4. Press #1. Top with whipped cream and dark mocha powder"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/java_chip_frappe.jpg",
        name: "Java Chip Frappucino (JCF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "Milk to lower line on cup. Pour contents into blender.",
        concentrate: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4",
        sc_syrup: "<span class='bold-text'>Frappe Chips</span>: 2, 3, 4. Add ice",
        final_steps: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4. Press #1. Top with whipped cream and mocha sauce drizzle"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/white_mocha_frappe.jpg",
        name: "White Mocha Frappuccino (WMF)",
        steam_milk: "<span class='bold-text'>Frappe Roast</span>: 2, 3, 4",
        shots: "Milk to lower line on cup. Pour contents into blender",
        concentrate: "<span class='bold-text'>White Mocha Sauce</span>: 1, 2, 2. Add ice",
        sc_syrup: "<span class='bold-text'>Coffee Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/caramel_macchiato_frappe.jpg",
        name: "Caramel Macchiato Frappuccino (CMF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Vanilla Concentrate</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        final_steps: "Press #1. Add one shot. Top with caramel drizzle"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/pure_matcha_cream_frappe.jpg",
        name: "Pure Matcha Cream Frappuccino (PMCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Classic Syrup</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Pure Matcha Powder</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/chocolate_chip_cream_frappe.jpg",
        name: "Chocolate Chip Cream Frappuccino (MOCCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Frappe Chips</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream and mocha sauce drizzle"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/chocolate_cream_frappe.jpg",
        name: "Chocolate Cream Frappuccino (MOCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Mocha Sauce</span>: 2, 3, 4. Add ice",
        concentrate: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        sc_syrup: "Press # 1",
        final_steps: "Top with whipped cream and mocha sauce drizzle"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/vanilla_cream_frappe.jpg",
        name: "Vanilla Cream Frappuccino (VCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Vanilla Concentrate</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/white_chocolate_cream_frappe.jpg",
        name: "White Chocolate Cream Frappuccino (WMCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>White Mocha Sauce</span>: 1, 2, 2. Add ice",
        concentrate: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        sc_syrup: "Press #1",
        final_steps: "Top with whipped cream."
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/caramel_cream_frappe.jpg",
        name: "Caramel Cream Frappuccino",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Caramel Concentrate</span>: 2, 3, 4",
        concentrate: "<span class='bold-text'>Cane Syrup</span>: 2, 3, 4. Add ice",
        sc_syrup: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        final_steps: "Press #1. Top with whipped cream and caramel sauce drizzle"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/hojicha_tea_creme_frappe.jpg",
        name: "Hojicha Tea Creme Frappuccino (HCF)",
        steam_milk: "Milk to lower line on cup. Pour contents into blender",
        shots: "<span class='bold-text'>Hojicha Powder</span>: 2, 3, 4. Add ice",
        concentrate: "<span class='bold-text'>Cream Base</span>: 2, 3, 4",
        sc_syrup: "Press #1",
        final_steps: "Top with whipped cream"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/raspberry_black_currant_and_green_tea_blended_juice.jpg",
        name: "Raspberry Black Currant and Green Tea Blended Juice (RJ)",
        steam_milk: "Raspberry black currant juice to middle line on cup.",
        shots: "Green tea or Oolong tea to upper line on cup",
        concentrate: "Pour contents into blender. Add ice",
        sc_syrup: "Press #1",
        final_steps: "Pour contents into blender"
    },
    {
        category: "Frappe",
        image: "frappe_beverage_img/mango_passion_fruit_and_hibiscus_tea_blended_juice.jpg",
        name: "Mango Passion Fruit and Hibiscus Tea Blended Juice (MJ)",
        steam_milk: "Mango Passion Fruit Juice to middle line on cup",
        shots: "Hibiscus tea to upper line on cup",
        concentrate: "Pour contents into blender. Add ice",
        sc_syrup: "Press #1",
        final_steps: "Pour contents into cup"
    },
];
  
// Define variables for the flashcard container, description container, and show description button
const categoryHeader = document.querySelector(".category-header")
const flashcardContainer = document.querySelector("#flashcard-container");
const flashcardImgContainer = document.querySelector("#flashcard-img-container");
const flashcardDrinkName = document.querySelector("#flashcard-drink-name");
const descriptionContainer = document.querySelector("#description-container");
const showDescriptionBtn = document.querySelector("#show-description-btn");
const searchBar = document.querySelector("#search-bar");
const searchResults = document.querySelector("#search-results")
  
// Define variables for the category buttons and add event listeners to generate a random flashcard
const hotCoffeeBtn = document.querySelector("#hot-coffee-btn");
hotCoffeeBtn.addEventListener("click", generateRandomFlashcard.bind(null, "Hot Coffee"));
  
const icedCoffeeBtn = document.querySelector("#iced-coffee-btn");
icedCoffeeBtn.addEventListener("click", generateRandomFlashcard.bind(null, "Iced Coffee"));
  
const hotTeaBtn = document.querySelector("#hot-tea-btn");
hotTeaBtn.addEventListener("click", generateRandomFlashcard.bind(null, "Hot Tea"));
  
const icedTeaBtn = document.querySelector("#iced-tea-btn");
icedTeaBtn.addEventListener("click", generateRandomFlashcard.bind(null, "Iced Tea"));

const frappeBtn = document.querySelector("#frappe-btn");
frappeBtn.addEventListener("click", generateRandomFlashcard.bind(null, "Frappe"));
  
// Define a function to generate a random flashcard for a given category
function generateRandomFlashcard(category) {
    // Filter the flashcards data to find all flashcards with the given category
    const categoryFlashcards = flashcardsData.filter(flashcard => flashcard.category === category);
    
    // Generate a random number between 0 and the number of flashcards in the category
    const randomIndex = Math.floor(Math.random() * categoryFlashcards.length);
    
    // Get the random flashcard from the category and display it in the flashcard container
    const randomFlashcard = categoryFlashcards[randomIndex];
    categoryHeader.innerHTML = `<h1>${randomFlashcard.category}</h1>`;
    flashcardImgContainer.innerHTML = `<img src="${randomFlashcard.image}">`;
    flashcardDrinkName.innerHTML = `<p><span class='bold-text'>${randomFlashcard.name}</span></p>`;
    
    // Hide the description container and reset the show description button text
    descriptionContainer.style.display = "none";
    showDescriptionBtn.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    
    showDescriptionBtn.onclick = function() {
        toggleDescription(randomFlashcard.steam_milk, randomFlashcard.shots, randomFlashcard.concentrate, randomFlashcard.sc_syrup, randomFlashcard.final_steps);
    };
}

// Define a function to show or hide the flashcard description
function toggleDescription(steam_milk, shots, concentrate, sc_syrup, final_steps) {
    if (descriptionContainer.style.display === "none") {
      descriptionContainer.style.display = "block";
      showDescriptionBtn.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
      descriptionContainer.innerHTML = `
        <div class="description">
            <p>${steam_milk}</p>
            <p>${shots}</span></p>
            <p>${concentrate}</p>
            <p>${sc_syrup}</p>
            <p>${final_steps}</p>
        </div>`;
    } else {
      descriptionContainer.style.display = "none";
      descriptionContainer.innerText = "";
      showDescriptionBtn.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    }
}

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.trim().toLowerCase();
  
    if (searchTerm.length < 3) {
        // If search term is too short, don't show any results
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }

    // Filter flashcard data to find all flashcards that contain the search term in their name
    const filteredFlashcards = flashcardsData.filter(flashcard => {
        const name = flashcard.name.toLowerCase();
        return name.includes(searchTerm);
    });

    // Create a list of recommended search results based on the filtered flashcards
    const searchResultList = document.createElement('ul');

    filteredFlashcards.forEach(flashcard => {
        const resultItem = document.createElement('li');
        resultItem.textContent = flashcard.name;

        resultItem.addEventListener('click', () => {
            categoryHeader.innerHTML = `<h1>${flashcard.category}</h1>`;
            flashcardImgContainer.innerHTML = `<img src="${flashcard.image}">`;
            flashcardDrinkName.innerHTML = `<p><span class='bold-text'>${flashcard.name}</span></p>`;
            descriptionContainer.innerHTML = `
            <div class="description">
                <p>${flashcard.steam_milk}</p>
                <p>${flashcard.shots}</span></p>
                <p>${flashcard.concentrate}</p>
                <p>${flashcard.sc_syrup}</p>
                <p>${flashcard.final_steps}</p>
            </div>`;
                
            descriptionContainer.style.display = "block";
            showDescriptionBtn.innerHTML = '<i class="fa-solid fa-caret-up"></i>';

            showDescriptionBtn.onclick = function() {
                toggleDescription(flashcard.steam_milk, flashcard.shots, flashcard.concentrate, flashcard.sc_syrup, flashcard.final_steps);
            };

            // Clear the search results
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
        });

        searchResultList.appendChild(resultItem);
    });
    
    if (searchResultList.childNodes.length > 0) {
        // Display the list of recommended search results
        searchResults.innerHTML = '';
        searchResults.appendChild(searchResultList);
        searchResults.style.display = 'block';
    } else {
        // Hide the search results
        searchResults.innerHTML = 'No results found';
        searchResults.style.color = 'grey';
        searchResultList.style.display = 'none';
    }
});

/*
// Define a function to filter the flashcards by category based on search input
function filterFlashcardsByCategory(category) {
    const filteredFlashcards = flashcardsData.filter(flashcard => flashcard.category.toLowerCase().includes(category.toLowerCase()));
    return filteredFlashcards;
}

// Define a function to display the filtered flashcards
function displayFilteredFlashcards(filteredFlashcards) {
    const flashcardsContainer = document.querySelector("#flashcards-container");
    flashcardsContainer.innerHTML = "";

    filteredFlashcards.forEach(flashcard => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<img src="${flashcard.image}"> <div class="description" style="display: none">${flashcard.description}</div>`;
        card.addEventListener("click", toggleCardDescription);
        flashcardsContainer.appendChild(card);
    });
}

// Define a function to handle search input
function handleSearchInput(event) {
    const searchValue = event.target.value;
    const filteredFlashcards = filterFlashcardsByCategory(searchValue);
    displayFilteredFlashcards(filteredFlashcards);
}

// Add event listener to search input
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", handleSearchInput);
*/