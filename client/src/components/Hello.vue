<template>
  <div>
    <b-jumbotron header="March Insanity" lead="A New Type of NCAA Bracket Challenge">
      <b-btn v-b-modal.Instructions size="lg" variant="outline-primary">How It Works</b-btn>
      <b-modal id="Instructions" size="lg" title="Instructions">
        <p> With March Insanity, busted brackets are a thing of the past. Your champion lost in the second round? No problem! 
        Your dark horse sweet 16 pick got blown out in the opening round? No big deal! We allow you to create a new bracket 
        at the end of every round, for a total of 6, and the scores of the brackets in this "Bracket Collection" are added 
        together to make up your score. 
            The scoring system is as follows:
        </p>
        <table>
          <thead>
              <tr>
                  <th>Bracket</th>
                  <th>Rd. of 64 PPG</th>
                  <th>Rd. of 32 PPG</th>
                  <th>Sweet 16 PPG</th>
                  <th>Elite Eight PPG</th>
                  <th>Final Four PPG</th>
                  <th>Championship PPG</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                  <td>8</td>
                  <td>16</td>
                  <td>32</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>X</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                  <td>8</td>
                  <td>16</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>X</td>
                  <td>X</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
                  <td>8</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>1</td>
                  <td>2</td>
                  <td>4</td>
              </tr>
              <tr>
                  <td>5</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>1</td>
                  <td>2</td>
              </tr>
              <tr>
                  <td>6</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>X</td>
                  <td>1</td>
              </tr>
          </tbody>
        </table>
      <b-modal>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  table {
    font-family: 'Open Sans', sans-serif;
    width: 750px;
    border-collapse: collapse;
    border: 3px solid #007bff;
    margin: auto;
  }

  table th {
    text-transform: uppercase;
    text-align: left;
    background: #007bff;
    color: #FFF;
    padding: 8px;
    min-width: 30px;
  }

  table td {
    text-align: left;
    padding: 8px;
    border-right: 2px solid rgb(166, 175, 243);
  }
  table td:last-child {
    border-right: none;
  }
  table tbody tr:nth-child(2n) td {
    background: #D4D8F9;
  }
</style>
