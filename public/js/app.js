var App = React.createClass({
  getInitialState: function() {
    return {
      url: "http://",
      links: []
    };
  },
  submit: function() {
    var self = this;
    $.post('/submit', {url: this.state.url}, function(links) {
      console.log(links)
      self.setState({
        links: links
      });
    });
  },

  handleChange: function(e) {
    this.setState({
      url: e.target.value
    })
  },

  render: function() {
    var links = this.state.links.map(function(link, index) {
      return (
        <li>
          <p>
            {index + 1}- 
            <a href={link}> 
              {link}
            </a>
          </p>
        </li>
      );
    });
    return (
      <div>
        <div className="url">
          <input type="text" value={this.state.url} onChange={this.handleChange}/>
            <button onClick={this.submit}>
              Submit
            </button>
        </div>
        <div className="links">
          {links}
        </div>
      </div>
    );
  }
});

React.render(<App/>, document.getElementById('app'));