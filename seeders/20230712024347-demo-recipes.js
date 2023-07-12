'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('recipes', [{
      title: "Slow-Cooker Baked Ziti",
      description: "A delicious, easy fix for a busy weeknight dinner for your family.",
      ingredients: "1 container (15 ounces) whole-milk ricotta cheese, 1 large egg beaten, 1 teaspoon dried basil, 1/2 teaspoon crushed red pepper flakes (optional), 1 jar (24 ounces) meatless pasta sauce, 2 cups uncooked ziti, 1/4 cup water, 2 cups shredded mozzarella cheese, 1/4 cup minced fresh basil, Grated Parmesan cheese (optional)",
      instructions: "In a small bowl, stir together ricotta cheese, egg, basil and if desired, red pepper flakes. Pour pasta sauce into a 5-qt. slow cooker. Evenly top sauce with pasta; pour water over top. Drop heaping tablespoons of ricotta cheese mixture over pasta. Sprinkle with mozzarella cheese. Cook, covered, on high until heated through and pasta is tender, 2 to 2-1/2 hours. Top with fresh basil and, if desired, Parmesan cheese and additional red pepper flakes; serve immediately.",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      title: "Caprese Eggplant Hero",
      description: "A tasteful meal to enjoy eating every season.",
      ingredients: "1 large eggplant, 1 teaspoon kosher salt divided, 1/4 cup olive oil, divided, 3 tablespoons honey, 1 teaspoon coarsely ground pepper, 1/4 cup balsamic glaze, divided, 1 loaf (1 pound) unsliced Italian bread, 2 large tomatoes, cut into 1/4-inch slices, 1 pound fresh mozzarella cheese, thinly sliced, 2 cups fresh arugula, 1/2 cup fresh basil leaves julienned",
      instructions: "Peel and slice eggplant lengthwise into 1/4-in.-thick slices. Place in a colander over a plate; sprinkle with salt and toss. Let stand 30 minutes. Brush eggplant slices with 2 tablespoons oil. Drizzle with honey; sprinkle with 1/2 teaspoon salt and pepper. Grill eggplant, covered, over medium heat until tender, 3-4 minutes per side. Drizzle with 2 tablespoons balsamic glaze. Cut bread in half horizontally. Drizzle cut sides with remaining 2 tablespoons olive oil and 2 tablespoons balsamic glaze. Layer eggplant, tomato and mozzarella slices on bread bottom; top with arugula and basil. Replace top. Cut crosswise into 6 slices.",
      created_at: new Date(),
      updated_at: new Date(),
    }, {
      title: "Peanut Butter Cookies",
      description: "The flavor of a peanut butter cookie is just hard to beat. They're perfectly sweet and buttery rich, and they're sure to satisfy that peanut butter craving.",
      ingredients: "1 large egg, room temperature, beaten, 1 cup sugar, 1 cup creamy peanut butter",
      instructions: "In a large bowl, mix all ingredients. Roll level tablespoons of dough into balls. Flatten with a fork. Preheat air fryer to 400°. In batches, place 1 in. apart in greased air fryer. Cook until lightly browned, 3-4 minutes. Allow to cool slightly on the pan and remove to wire racks to cool.",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('recipes', null, {});
  }
};
