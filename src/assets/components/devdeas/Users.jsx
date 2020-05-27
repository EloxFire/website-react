import React, {Component} from 'react';
import axios from 'axios';
import '../../sass/devdeas/users.scss';

class Users extends Component{

  constructor(props) {
    super(props);
    this.state = {
      dbResponse: "",
      createIdeaName: "",
      createIdeaLang: "",
      createIdeaDesc: "",
      createIdeaKeyWords: "",
      fetchedIdea: []
    };

    this.handleChangeIdeaName = this.handleChangeIdeaName.bind(this);
    this.handleChangeIdeaLang = this.handleChangeIdeaLang.bind(this);
    this.handleChangeIdeaDesc = this.handleChangeIdeaDesc.bind(this);
    this.handleChangeIdeaKeyWords = this.handleChangeIdeaKeyWords.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeIdeaName(e) {
    this.setState({
        ideaName: e.target.value
    });
    console.log('onChange Name : ', this.state.ideaName);
  }

  handleChangeIdeaLang(e) {
    this.setState({
        ideaLang: e.target.value
    });
    console.log('onChange lang : ', this.state.ideaLang);
  }

  handleChangeIdeaDesc(e) {
    this.setState({
        ideaDesc: e.target.value
    });
    console.log('onChange desc : ', this.state.ideaDesc);
  }

  handleChangeIdeaKeyWords(e) {
    this.setState({
        ideaKeyWords: e.target.value
    });
    console.log('onChange keywords : ', this.state.ideaKeyWords);
  }

  handleSubmit(e){
    e.preventDefault();

    const idea = {
      name: this.state.ideaName,
      description: this.state.ideaDesc,
      lang: this.state.ideaLang
    };

    axios.post('http://185.163.126.247:9000/add', idea)
      .then(res => console.log("data sent"))
      .catch(err => console.log(err.data));
  }

  getIdeas(){
    fetch("http://185.163.126.247:9000/ideas")
    .then(res => res.json())
    .then(res => this.setState({
      fetchedIdea: res
    }));
  }

  callDB() {
    fetch("http://185.163.126.247:9000/database")
    .then(res => res.text())
    .then(res => this.setState({ dbResponse: res }));
    console.log(this.state.dbResponse);
  }

  componentWillMount() {
      this.callDB();
      this.getIdeas();
  }

  render(){
    return(
      <div id="usersShare" className="pt-5">
        <h1 className="ml-5 devdeasSectionTitle"><span>&#60;</span><span>&#47;</span>For users<span>&#62;</span></h1>
        <p className="ml-5">Here you can upload any new idea. It'll be stored in my database and everyone will be able to see it so, be specific !</p>

        <div className="formCreateContainer container mt-3 mb-5">
          <h5>Submit idea form.</h5>

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="inputCreateIdeaName">Idea name</label>
                <input onChange={this.handleChangeIdeaName} type="text" className="form-control" id="inputCreateIdeaName" placeholder="Give a name to your idea"/>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputCreateIdeaLang">Idea language</label>
                <input onChange={this.handleChangeIdeaLang} type="text" className="form-control" id="inputCreateIdeaLang" placeholder="What language would you like to see it made"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inoutCreateIdeaDescription">Idea description</label>
              <textarea onChange={this.handleChangeIdeaDesc} className="form-control" type="text" id="inoutCreateIdeaDescription" cols="30" rows="5" placeholder="Describe your idea with the most details you can give"></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="inputCreateIdeaKeywords">Idea keywords</label>
              <input onChange={this.handleChangeIdeaKeyWords} type="text" className="form-control" id="inputCreateIdeaKeywords" placeholder="Hack, Web, Automation..."/>
            </div>

            <div className="d-flex flex-column">
              <button type="submit" className="btn btn-success">Submit you idea !</button>
              <small>Database connexion : {this.state.dbResponse}</small>
            </div>
          </form>
        </div>

        <h1 className="ml-5 devdeasSectionTitle"><span>&#60;</span><span>&#47;</span>For developpers<span>&#62;</span></h1>
        <p className="ml-5">Here you can start developping an idea, share your progress and get help !</p>

        <div className="ideaListContainer">
          <div className="container d-flex flex-wrap">
            {this.state.fetchedIdea.map(function(item, index){
              return(
                <div className="card m-2 ideaCard">
                  <div className="card-header text-center">
                    {item.name}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item text-center">{item.description}</li>
                    <li className="list-group-item text-center">{item.lang}</li>
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Users;
