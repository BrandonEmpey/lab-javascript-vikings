// Soldier
function Soldier (health, strength)
{
  this.health = health;
  this.strength = strength;
  attack: function attack()
  {
    return this.strength;
  }
  receiveDamage: function receiveDamage(damage)
  {
    health = health - damage;
  }
}

// Viking
function Viking () {}

// Saxon
function Saxon () {}

// War
function War () {}
