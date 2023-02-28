
export const Login = () => {
    return(
        <div>
            <form>
                <label for="email">Email : </label>
                <input type="email" placeholder="abc@gmail.com" name="email" id="email"/>
                <br/>
                <label for="pass">Password : </label>
                <input type="password" placeholder="********" name="pass" id="pass"/>
                <br/>
                <button>Log In</button>
            </form>
        </div>
    )
}
