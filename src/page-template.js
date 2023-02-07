module.exports = team => {
    const createManagerHtml = manager => {
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <meta name="Description" content="Enter your description here"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Title</title>
        </head>
        <body>
        <div class='manager'>
        <h2>${manager.getName()}</h2>
        <p> Role: ${manager.getRole()}</p>
        <p> ID: ${manager.getId()}</p>
        <p> Email: <a href='${manager.getEmail()}'>${manager.getEmail()}</a></p>
        <p> Office Number: ${manager.getOffice()}</p>
        </div>`
    }

    const createEngineerHtml = engineer => {
        return `<div class='engineer'>
        <h2>${engineer.getName()}</h2>
        <p> Role: ${engineer.getRole()}</p>
        <p> ID: ${engineer.getId()}</p>
        <p> Email: <a href='${engineer.getEmail()}'>${engineer.getEmail()}</a></p>
        <p> Github: <a href='${engineer.getGithub()}'>${engineer.getGithub()}</a></p>
        </div>`
    }

    const createInternHtml = intern => {
        return `<div class='intern'>
        <h2>${intern.getName()}</h2>
        <p> Role: ${intern.getRole()}</p>
        <p> ID: ${intern.getId()}</p>
        <p> Email: <a href='${intern.getEmail()}'>${intern.getEmail()}</a></p>
        <p> School: ${intern.getSchool()}</p>
        </div>`
    
    }
    
    let html = ''

    team.forEach(item => {
        if (item.getRole() === 'Manager') {
            let managerObject = item
            html+=createManagerHtml(managerObject)
        } else if (item.getRole() === 'Engineer') {
            html+=createEngineerHtml(item)
            
        } else {
            html+= createInternHtml(item)
            
        }
    })

    html+=`<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.min.js"></script>
    </body>
    </html>`

    return html
}