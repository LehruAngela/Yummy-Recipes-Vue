<template>
    <div class="form-margin">
      <navbar/>
      <h1>Yummy Recipes App</h1>
      <form onSubmit={this.handleRegister}> 
          <div className="form-group">
            <h4><label htmlFor="email">Email:</label></h4>
            <input name="email" type="email" value={email} onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <h4><label htmlFor="text">Username:</label></h4>
            <input name="username" type="text" value={username} onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <h4><label htmlFor="password">Password:</label></h4>
            <input name="password" type="password" value={password} onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <h4><label htmlFor="confirmpassword">Confirm Password:</label></h4>
            <input name="confirm_password" type="password" value={confirm_password} onChange={this.handleInputChange}/>
          </div>
          <div className="form-group">
            <button className="btn btn-outline-warning" type="submit">Register</button>
          </div><br/>
      </form>
      <h4>Already have an account?</h4>
        <div>
        <router-link to="/login"><button className="btn btn-outline-warning" type="submit">Login</button></router-link>
        </div><br/><br/>
      <footer>
        <p className="copyright text-muted small footer">Copyright © Gela 2019.</p>
      </footer>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  
}
</script>

