 const birthdayCelebrantRepository =  require('../repositories/birthdayCelebrantRepository')


const createBirthdayCelebrant = async (req, res) => {
    const { fullName, dateOfBirth } = req.body;

    const data = {fullName, dateOfBirth: new Date(dateOfBirth)}
    
    await birthdayCelebrantRepository.createBirthdayCelebrant(data);
}


module.exports = {createBirthdayCelebrant}