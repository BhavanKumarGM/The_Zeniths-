import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, MapPin, Users } from 'lucide-react';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	return (
		<section className="relative overflow-hidden min-h-screen flex items-center">
			<div className="absolute inset-0">
				<img
					src="https://images.unsplash.com/photo-1441908073936-5113d6be97fe?auto=compress&cs=tinysrgb&w=1600&fit=crop"
					alt="Farm landscape"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-primary/20" />
				<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
			</div>

			<div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
				<div className="max-w-4xl">
					<div className="animate-fade-in">
						<h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
							{t('heroTitle')}
						</h1>
						<p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
							{t('heroSubtitle')}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up">
						<Button
							onClick={() => navigate('/buyer-discovery')}
							className="bg-primary hover:bg-brand-sage text-primary-foreground px-8 py-4 text-lg font-semibold shadow-conversion group"
						>
							<Users className="mr-2" size={20} />
							{t('discoverFarms')}
							<ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
						</Button>
						<Button
							onClick={() => navigate('/interactive-farm-map')}
							variant="outline"
							className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold group"
						>
							<MapPin className="mr-2" size={20} />
							{t('exploreFarmMap')}
						</Button>
					</div>

					{/* Stats */}
					<div className="grid grid-cols-1 sm:grid-cols-3 gap-8 animate-fade-in">
						<div className="text-center sm:text-left">
							<div className="text-3xl font-bold text-white mb-2">500+</div>
							<div className="text-white/80">Active Farmers</div>
						</div>
						<div className="text-center sm:text-left">
							<div className="text-3xl font-bold text-white mb-2">1000+</div>
							<div className="text-white/80">Fresh Products</div>
						</div>
						<div className="text-center sm:text-left">
							<div className="text-3xl font-bold text-white mb-2">50+</div>
							<div className="text-white/80">Cities Covered</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;