import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  X, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Tag, 
  Compass, 
  Sun,
  ShieldCheck
} from 'lucide-react';
import { ARTICLES } from '../data/articles';
import { useCart } from '../context/CartContext';
import { Article } from '../types';

export const BlogPage: React.FC = () => {
  const { setSelectedArticle } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'All',
    'Sustainable Choices',
    'Sun Protection',
    'Travel Inspiration',
    'Gear Care & Longevity',
    'Brand Spotlight',
    'Outdoor Skills'
  ];

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      if (activeCategory !== 'All' && article.category !== activeCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesExcerpt = article.excerpt.toLowerCase().includes(q);
        const matchesTags = article.tags.some((t) => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesExcerpt && !matchesTags) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery]);

  const featuredArticle = ARTICLES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fb8500]/15 text-[#fb8500] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          <span>The Solterra Field Journal</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#023047] font-['Outfit']">
          Trail Wisdom, Sun Science & Outdoor Education
        </h1>
        <p className="text-sm sm:text-base text-[#023047]/70 leading-relaxed">
          Guides to low-impact exploration, non-nano sun protection, equipment maintenance, and behind-the-scenes ethical maker spotlights.
        </p>
      </div>

      {/* Featured Cover Story */}
      {featuredArticle && activeCategory === 'All' && !searchQuery && (
        <div 
          onClick={() => setSelectedArticle(featuredArticle)}
          className="bg-white rounded-3xl border border-[#023047]/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer group grid grid-cols-1 lg:grid-cols-12"
        >
          <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#F4EFEA] relative">
            <img
              src={featuredArticle.coverImage}
              alt={featuredArticle.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 bg-[#023047] text-[#ffb703] px-3.5 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md">
              Editor’s Pick
            </div>
          </div>

          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xs text-[#023047]/60">
                <span className="font-bold text-[#fb8500] uppercase tracking-wider">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-[#023047] font-['Outfit'] group-hover:text-[#219ebc] transition-colors leading-tight">
                {featuredArticle.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#023047]/80 leading-relaxed line-clamp-3">
                {featuredArticle.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-[#023047]/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={featuredArticle.author.avatar}
                  alt={featuredArticle.author.name}
                  className="w-9 h-9 rounded-full object-cover border border-[#219ebc]"
                />
                <div>
                  <div className="text-xs font-bold text-[#023047]">
                    {featuredArticle.author.name}
                  </div>
                  <div className="text-[10px] text-[#023047]/60">
                    {featuredArticle.date}
                  </div>
                </div>
              </div>

              <span className="text-xs font-bold text-[#fb8500] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                <span>Read Story</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#023047]/40 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides, UV tips, gear care..."
              className="w-full pl-9 pr-8 py-2 rounded-xl bg-white border border-[#023047]/15 text-xs text-[#023047] focus:outline-none focus:ring-1 focus:ring-[#219ebc]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2.5 text-[#023047]/40 hover:text-[#023047]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="text-xs text-[#023047]/60 self-start sm:self-auto">
            Showing <strong>{filteredArticles.length}</strong> journal articles
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-[#023047] text-white shadow-sm'
                    : 'bg-white text-[#023047]/70 border border-[#023047]/10 hover:bg-[#FAF8F5]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-[#023047]/10 space-y-3">
          <BookOpen className="w-8 h-8 text-[#023047]/30 mx-auto" />
          <h3 className="font-bold text-base text-[#023047]">No stories found matching your criteria</h3>
          <button
            onClick={() => {
              setActiveCategory('All');
              setSearchQuery('');
            }}
            className="text-xs font-bold text-[#fb8500] hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-white rounded-3xl border border-[#023047]/10 overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] overflow-hidden bg-[#F4EFEA] relative">
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/95 text-[#023047] shadow-sm">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-[11px] text-[#023047]/60">
                    <Calendar className="w-3 h-3" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3 h-3" />
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-bold text-[#023047] text-lg group-hover:text-[#219ebc] transition-colors line-clamp-2 leading-snug font-['Outfit']">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#023047]/70 line-clamp-2 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-3 border-t border-[#023047]/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#219ebc]"
                  />
                  <span className="text-xs font-bold text-[#023047]">
                    {article.author.name}
                  </span>
                </div>

                <ArrowRight className="w-4 h-4 text-[#023047]/40 group-hover:text-[#fb8500] group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
