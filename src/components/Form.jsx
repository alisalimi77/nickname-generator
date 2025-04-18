const Form = ({ onGenerate }) => {
    const [name, setName] = React.useState('');
    const [language, setLanguage] = React.useState('');
    
    const languages = [
        'JavaScript', 'Python', 'Java', 'C++', 'Ruby', 'Go',
        'Rust', 'TypeScript', 'PHP', 'Swift'
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onGenerate({ name, language });
    };

    const handleRandomize = () => {
        const randomLang = languages[Math.floor(Math.random() * languages.length)];
        setLanguage(randomLang);
        onGenerate({ name, language: randomLang });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-gray-800 rounded-lg pixel-border">
            <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 retro-font">
                    Your Name
                </label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                />
            </div>

            <div>
                <label htmlFor="language" className="block text-sm font-medium mb-2 retro-font">
                    Favorite Language
                </label>
                <select
                    id="language"
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                    <option value="">Select a language</option>
                    {languages.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                    ))}
                </select>
            </div>

            <div className="flex gap-4">
                <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md font-medium retro-font text-sm transition-colors"
                >
                    Generate
                </button>
                <button
                    type="button"
                    onClick={handleRandomize}
                    className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium retro-font text-sm transition-colors"
                >
                    Randomize
                </button>
            </div>
        </form>
    );
}; 