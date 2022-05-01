const pool = mysql.createPool({
});

module.exports = {
    // list: [],

    addCustomer: function (name, phone, email, countryId) {
        // const name = process.argv.slice(2);

        if (!name || name.length === 0) {
            throw ('ERROR: name is empty');
        }

        // this.list.push({
        //     name: name,
        //     id: this.list.length,
        // });

        pool.getConnection(function (connErr, connection) {
            if (connErr) throw connErr; // not connected!

            // const sql = "INSERT INTO customers(name, phone, email, country_id)" +
            //     " VALUES('" + name + "','" + phone + "','" + email + "','" + countryId + "');";

            const sql = "INSERT INTO customers(name, phone, email, country_id)" +
                " VALUES(?,?,?,?);";

@@ -48,10 +36,6 @@ module.exports = {
    },

    customersList: function (req, res) {
        // this.list.forEach(customer => {
        //     console.log(`ok. name: ${customer.name} was created.`);
        // })

        pool.getConnection(function (connErr, connection) {
            if (connErr) throw connErr; // not connected!
