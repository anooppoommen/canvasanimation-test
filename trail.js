var trailPartcle = function(params){
			this.x = params.x;
			this.y = params.y;

			this.radius = params.radius;
			this.velocity = 0.05;
			this.rad = Math.random()*Math.PI *2;
			this.dist = randomIntFromRange(50,120);
			this.trails = []
			this.maxTrailSize = 50;
			this.trails.push({ x : this.x + Math.cos(this.rad) * this.dist , y : this.y + Math.sin(this.rad) * this.dist});
			
			this.update = function(){
				
				if(this.trails.length > this.maxTrailSize){
					this.trails = this.trails.slice(2);
				}
				
				this.rad += this.velocity;
				this.trails.push({
					x : this.x + Math.cos(this.rad) * this.dist,
					y : this.y + Math.sin(this.rad) * this.dist
				});

			}
			
			this.render = function(){
				
				this.update();

				
				c.strokeStyle = this.color;
				c.lineWidth = this.radius;
				var end = this.trails[0];
				
				for(var i = 0;i<this.trails.length;i++){
					c.beginPath();
					var alpha = (i+1) / this.trails.length;
					var color = 'rgba(0,0,0,'+alpha/2+')';
					c.strokeStyle = color;
					c.moveTo(end.x,end.y);
					c.lineTo(this.trails[i].x,this.trails[i].y);
					end = this.trails[i];
					c.stroke();
					c.closePath();	
				
				}

				
			}


		}
