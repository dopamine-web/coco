import '../scss/blog.scss';

// components
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useInsightsSlider, useArticlesSlider } from './components/blog/insights';

useTheme();
useBurger();
useInsightsSlider();
useArticlesSlider();