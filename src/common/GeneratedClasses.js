const generatedClasses = {};

for (let i = 1; i <= 50; i++) {

    generatedClasses[`mt${i}`] = {
        marginTop: i,
    };
    generatedClasses[`pt${i}`] = {
        paddingTop: i,
    };
    generatedClasses[`mb${i}`] = {
        marginBottom: i,
    };
    generatedClasses[`pb${i}`] = {
        paddingBottom: i,
    };

    generatedClasses[`ml${i}`] = {
        marginLeft: i,
    };
    generatedClasses[`mr${i}`] = {
        marginRight: i,
    };
    generatedClasses[`py${i}`] = {
        paddingVertical: i,
    };
    generatedClasses[`my${i}`] = {
        marginVertical: i,
    };
    generatedClasses[`mx${i}`] = {
        marginHorizontal: i,
    };
}

for (let i = 1; i <= 50; i++) {
    generatedClasses[`fs${i}`] = {
        fontSize: i,
    };
}

export default generatedClasses;
