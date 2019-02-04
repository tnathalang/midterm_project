const faker = require('faker')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  knex.raw('ALTER TABLE choices AUTO_INCREMENT = 1')
  return knex('choices').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('choices').insert([

          { poll_id: 1, name_choice: "a", description: "whatever", choice_number: 1 },
          { poll_id: 1, name_choice: "b", description: "whenever", choice_number: 2 },
          { poll_id: 1, name_choice: "c", description: "whatever", choice_number: 3 },
          { poll_id: 1, name_choice: "d", description: "whatever", choice_number: 4 },
          { poll_id: 2, name_choice: "a", description: "whateverman", choice_number: 1 },
          { poll_id: 2, name_choice: "a", description: "whateverman", choice_number: 2 },
          { poll_id: 2, name_choice: "a", description: "whateverman", choice_number: 3 },
          { poll_id: 2, name_choice: "a", description: "whateverman", choice_number: 4 },
          { poll_id: 3, name_choice: "a", description: "whateverman", choice_number: 1 },
          { poll_id: 3, name_choice: "a", description: "whateverman", choice_number: 2 },
          { poll_id: 3, name_choice: "a", description: "whateverman", choice_number: 3 },
          { poll_id: 3, name_choice: "a", description: "whateverman", choice_number: 4 },
          { poll_id: 4, name_choice: "a", description: "whateverman", choice_number: 1 },
          { poll_id: 4, name_choice: "a", description: "whateverman", choice_number: 2 },
          { poll_id: 4, name_choice: "a", description: "whateverman", choice_number: 3 },
          { poll_id: 4, name_choice: "a", description: "whateverman", choice_number: 4 },
        ]),

      ]);
    });
};
