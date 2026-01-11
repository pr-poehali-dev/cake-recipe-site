import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [email, setEmail] = useState('');

  const categories = [
    { id: 'all', name: 'Все рецепты', icon: 'ChefHat' },
    { id: 'cakes', name: 'Торты', icon: 'Cake' },
    { id: 'desserts', name: 'Десерты', icon: 'IceCream' },
    { id: 'pastry', name: 'Выпечка', icon: 'Cookie' },
  ];

  const recipes = [
    {
      id: 1,
      title: 'Шоколадный торт с ягодами',
      category: 'cakes',
      time: '90 мин',
      difficulty: 'Средний',
      image: 'https://cdn.poehali.dev/projects/1a192e60-59e0-423b-8b04-30a55fb7f37a/files/c3a67c84-9a0c-41f8-8117-7af632e857d7.jpg',
      description: 'Нежный шоколадный бисквит с кремовой прослойкой и свежими ягодами',
      steps: 5,
    },
    {
      id: 2,
      title: 'Клубничный тарт',
      category: 'desserts',
      time: '60 мин',
      difficulty: 'Легкий',
      image: 'https://cdn.poehali.dev/projects/1a192e60-59e0-423b-8b04-30a55fb7f37a/files/ff115518-e415-4cb5-9def-9a54be439c17.jpg',
      description: 'Хрустящее песочное тесто с ванильным кремом и свежей клубникой',
      steps: 4,
    },
    {
      id: 3,
      title: 'Французские круассаны',
      category: 'pastry',
      time: '120 мин',
      difficulty: 'Сложный',
      image: 'https://cdn.poehali.dev/projects/1a192e60-59e0-423b-8b04-30a55fb7f37a/files/728e5276-9bb2-4864-a5b9-33868abbcecc.jpg',
      description: 'Классические слоёные круассаны с золотистой корочкой',
      steps: 8,
    },
  ];

  const [selectedRecipe, setSelectedRecipe] = useState(recipes[0]);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRecipes = activeCategory === 'all' 
    ? recipes 
    : recipes.filter(r => r.category === activeCategory);

  useEffect(() => {
    document.title = 'Сладкие Рецепты — Торты, Десерты и Выпечка с Пошаговыми Фото';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Лучшие рецепты тортов, десертов и выпечки с подробными пошаговыми фотографиями. Простые и проверенные рецепты для домашней кухни.');
    }
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert('Спасибо за подписку! 🎂');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Cake" className="text-white" size={24} />
              </div>
              <span className="text-3xl font-bold text-foreground">Сладкие Рецепты</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#recipes" className="text-foreground/70 hover:text-primary transition-colors">Рецепты</a>
              <a href="#categories" className="text-foreground/70 hover:text-primary transition-colors">Категории</a>
              <a href="#subscribe" className="text-foreground/70 hover:text-primary transition-colors">Подписка</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
              Вкусные рецепты
              <span className="block text-primary mt-2">каждый день</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Пошаговые инструкции с фотографиями для приготовления тортов, десертов и выпечки
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: 'Camera', title: 'Пошаговые фото', text: 'Каждый этап с подробными снимками' },
              { icon: 'Clock', title: 'Точное время', text: 'Реалистичные временные рамки' },
              { icon: 'Star', title: 'Проверенные рецепты', text: 'Все рецепты протестированы' },
            ].map((feature, i) => (
              <Card key={i} className="border-border/50 bg-card/50 backdrop-blur hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${i * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Категории рецептов</h2>
          
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full max-w-3xl mx-auto mb-8 bg-background/80 h-auto p-2">
              {categories.map(cat => (
                <TabsTrigger 
                  key={cat.id} 
                  value={cat.id}
                  className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  <Icon name={cat.icon as any} size={18} />
                  <span className="hidden sm:inline">{cat.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map(cat => (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <div className="grid md:grid-cols-3 gap-6">
                  {filteredRecipes.map(recipe => (
                    <Card 
                      key={recipe.id} 
                      className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group border-border/50 bg-card"
                      onClick={() => setSelectedRecipe(recipe)}
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img 
                          src={recipe.image} 
                          alt={recipe.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <Badge className="bg-primary/90 text-white backdrop-blur">{recipe.difficulty}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {recipe.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          {recipe.description}
                        </p>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Icon name="Clock" size={16} />
                            <span>{recipe.time}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Icon name="List" size={16} />
                            <span>{recipe.steps} шагов</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section id="recipes" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Подробный рецепт</h2>
          <p className="text-center text-muted-foreground mb-12">Выберите рецепт выше для просмотра деталей</p>
          
          <Card className="overflow-hidden border-border/50 bg-card shadow-xl">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-96 md:h-auto">
                <img 
                  src={selectedRecipe.image} 
                  alt={selectedRecipe.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-primary/90 text-white">{selectedRecipe.difficulty}</Badge>
                  <Badge variant="outline" className="border-primary/50 text-primary">{selectedRecipe.time}</Badge>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-foreground">{selectedRecipe.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedRecipe.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Users" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Порции</h4>
                      <p className="text-sm text-muted-foreground">8-10 порций</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="ChefHat" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Сложность</h4>
                      <p className="text-sm text-muted-foreground">Подходит для домашней кухни</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon name="Camera" size={16} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Пошаговые фото</h4>
                      <p className="text-sm text-muted-foreground">{selectedRecipe.steps} детальных этапов с иллюстрациями</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Открыть полный рецепт
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      <section id="subscribe" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/30">
        <div className="container mx-auto max-w-2xl text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Mail" className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold mb-4 text-foreground">Подпишитесь на рассылку</h2>
            <p className="text-lg text-muted-foreground">
              Получайте новые рецепты прямо на почту каждую неделю
            </p>
          </div>
          
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Ваш email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-background/80 border-border/50"
              required
            />
            <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90 text-white">
              Подписаться
            </Button>
          </form>
          
          <p className="text-sm text-muted-foreground mt-4">
            Без спама, только вкусные рецепты 🍰
          </p>
        </div>
      </section>

      <footer className="bg-foreground/5 border-t border-border/40 py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Icon name="Cake" className="text-white" size={18} />
                </div>
                <h3 className="text-xl font-bold text-foreground">Сладкие Рецепты</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Лучшие рецепты тортов, десертов и выпечки с пошаговыми фотографиями
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Категории</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Торты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Десерты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Выпечка</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Контакты</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Instagram" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Youtube" size={20} className="text-primary" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Icon name="Mail" size={20} className="text-primary" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2026 Сладкие Рецепты. Все рецепты проверены и протестированы</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;