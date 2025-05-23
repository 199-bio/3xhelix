// Section rendering functions

function renderAnalysisSection() {
    const analysisPowerContainer = document.querySelector('#analysis-power .details-container[data-source="gene-therapy-analysis"]');
    if (!analysisPowerContainer) return;
    
    // Group analysis items into categories
    const analysisCategories = [
        {
            title: 'Aging & Longevity',
            icon: '⏰',
            items: [
                'Epigenetic Biological Age',
                'Telomere Length Analysis',
                'Dunedin PACE',
                'OMICm Age (Harvard)',
                'Extrinsic & Intrinsic Age'
            ]
        },
        {
            title: 'Disease Screening',
            icon: '🔬',
            items: [
                'Rare Disease Screening (15,000+)',
                'Cancer Risk Analysis',
                'Autoimmune Disorders',
                'Carrier Screening'
            ]
        },
        {
            title: 'Body Systems',
            icon: '🫀',
            items: [
                'Cardiovascular Health',
                'Brain & Neurological',
                'Digestive & Gut Health',
                'Immune System Analysis'
            ]
        },
        {
            title: 'Genomic Analysis',
            icon: '🧬',
            items: [
                '850,000+ CpG Loci',
                'Whole Genomic Sequencing',
                'Whole Exon Sequencing',
                'Medication Response'
            ]
        }
    ];

    let htmlContent = '<div class="analysis-categories">';
    analysisCategories.forEach(category => {
        htmlContent += `
            <div class="analysis-category-card glass-card">
                <div class="category-icon">${category.icon}</div>
                <h4>${category.title}</h4>
                <ul class="category-items">
                    ${category.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
        `;
    });
    htmlContent += '</div>';
    
    // Add the complete body systems as a separate visual grid
    htmlContent += '<div class="body-systems-grid">';
    htmlContent += '<h4 class="section-subtitle">Complete Body Systems Analysis</h4>';
    htmlContent += '<div class="systems-icons">';
    
    const bodySystems = [
        { name: 'Cardiovascular', icon: '❤️' },
        { name: 'Digestive', icon: '🫁' },
        { name: 'Integumentary', icon: '🧴' },
        { name: 'Endocrine', icon: '⚗️' },
        { name: 'Immune', icon: '🛡️' },
        { name: 'Lymphatic', icon: '💧' },
        { name: 'Musculoskeletal', icon: '💪' },
        { name: 'Neurological', icon: '🧠' },
        { name: 'Respiratory', icon: '🫁' },
        { name: 'Reproductive', icon: '🔄' },
        { name: 'Sensory', icon: '👁️' },
        { name: 'Urinary', icon: '💧' }
    ];
    
    bodySystems.forEach(system => {
        htmlContent += `
            <div class="system-icon-card">
                <div class="system-icon">${system.icon}</div>
                <p>${system.name}</p>
            </div>
        `;
    });
    
    htmlContent += '</div></div>';
    analysisPowerContainer.innerHTML = htmlContent;
}

function renderDiseaseSection() {
    const diseaseTherapiesContainer = document.querySelector('#disease-gene-therapies .details-container[data-source="disease-gene-therapies"]');
    if (!diseaseTherapiesContainer) return;
    
    const diseaseCategories = [
        {
            title: 'Neurological',
            icon: '🧠',
            featured: ['ALS', 'Alzheimers Disease', 'Parkinsons Disease', 'Multiple Sclerosis'],
            color: 'neurological'
        },
        {
            title: 'Cardiovascular',
            icon: '❤️',
            featured: ['Coronary Artery Disease', 'Cardiomyopathy', 'CHF', 'Hypertension'],
            color: 'cardiovascular'
        },
        {
            title: 'Metabolic',
            icon: '⚡',
            featured: ['Type II Diabetes', 'Obesity', 'NAFLD', 'Metabolic Syndrome'],
            color: 'metabolic'
        },
        {
            title: 'Genetic & Rare',
            icon: '🧬',
            featured: ['Duchennes Muscular Dystrophy', 'Pompe Disease', 'Stargardt Disease'],
            color: 'genetic'
        }
    ];
    
    let htmlContent = '<div class="disease-categories">';
    diseaseCategories.forEach(category => {
        htmlContent += `
            <div class="disease-category-card ${category.color}">
                <div class="category-header">
                    <span class="category-icon">${category.icon}</span>
                    <h4>${category.title}</h4>
                </div>
                <div class="featured-diseases">
                    ${category.featured.map(disease => `<span class="disease-tag">${disease}</span>`).join('')}
                </div>
            </div>
        `;
    });
    htmlContent += '</div>';
    
    // Add a "View All" section with the complete list
    htmlContent += `
        <div class="view-all-section">
            <button class="view-all-btn" onclick="toggleAllDiseases()">
                View All ${siteContent.diseaseGeneTherapies.list.length}+ Conditions We Treat
            </button>
            <div id="all-diseases-container" class="all-diseases-grid" style="display: none;">
                ${siteContent.diseaseGeneTherapies.list.map(disease => 
                    `<span class="disease-pill">${disease}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    diseaseTherapiesContainer.innerHTML = htmlContent;
}

function renderLongevitySection() {
    const longevityTherapiesContainer = document.querySelector('#longevity .details-container[data-source="longevity-gene-therapies"]');
    if (!longevityTherapiesContainer) return;
    
    let htmlContent = '<div class="longevity-grid">';
    const longevityTherapies = [
        { name: 'hTERT', description: 'Telomerase activation', icon: '🧬' },
        { name: 'Follistatin', description: 'Muscle & metabolism', icon: '💪' },
        { name: 'FGF21', description: 'Metabolic regulator', icon: '⚡' },
        { name: 'Klotho Alpha', description: 'Anti-aging protein', icon: '⏰' },
        { name: 'SIRT1', description: 'Longevity pathway', icon: '🔄' },
        { name: 'PGC1A', description: 'Mitochondrial health', icon: '🔋' },
        { name: 'FOXO3', description: 'Stress resistance', icon: '🛡️' },
        { name: 'VEGF', description: 'Vascular health', icon: '❤️' }
    ];
    
    longevityTherapies.forEach(therapy => {
        htmlContent += `
            <div class="longevity-card glass-card">
                <div class="therapy-icon">${therapy.icon}</div>
                <h4>${therapy.name}</h4>
                <p>${therapy.description}</p>
            </div>
        `;
    });
    htmlContent += '</div>';
    longevityTherapiesContainer.innerHTML = htmlContent;
}

function renderOncologySection() {
    const oncologyAnalysisContainer = document.querySelector('#oncology-reimagined .details-container[data-source="oncology-analysis"]');
    if (oncologyAnalysisContainer) {
        const oncologyServices = {
            diagnostics: {
                title: 'Advanced Diagnostics',
                icon: '🔬',
                items: ['CT', 'MRI', 'PET', 'Mammography', 'NGS', 'Tumor DNA Analysis']
            },
            therapies: {
                title: 'Precision Therapies',
                icon: '🎯',
                items: ['Microwave Ablation', 'Cryoablation', 'Immunotherapy', 'Gene Therapy']
            }
        };
        
        let htmlContent = '<div class="oncology-services">';
        Object.values(oncologyServices).forEach(service => {
            htmlContent += `
                <div class="service-card glass-card">
                    <div class="service-header">
                        <span class="service-icon">${service.icon}</span>
                        <h4>${service.title}</h4>
                    </div>
                    <div class="service-items">
                        ${service.items.map(item => `<div class="service-item">${item}</div>`).join('')}
                    </div>
                </div>
            `;
        });
        htmlContent += '</div>';
        oncologyAnalysisContainer.innerHTML = htmlContent;
    }
    
    const oncologicDiseasesContainer = document.querySelector('#oncology-reimagined .details-container[data-source="oncologic-diseases"]');
    if (oncologicDiseasesContainer) {
        let htmlContent = `
            <div class="oncology-intro glass-card">
                <p>${siteContent.oncologicDiseases.intro}</p>
            </div>
            <div class="cancer-types-grid">
        `;
        
        const cancerTypes = siteContent.oncologicDiseases.list.slice(0, 8); // Show top 8
        cancerTypes.forEach(cancer => {
            htmlContent += `<div class="cancer-type-card">${cancer}</div>`;
        });
        
        htmlContent += `
            </div>
            <button class="view-more-btn" onclick="toggleAllCancers()">
                View All Cancer Types
            </button>
            <div id="all-cancers" style="display: none;" class="all-cancers-grid">
                ${siteContent.oncologicDiseases.list.slice(8).map(cancer => 
                    `<span class="cancer-pill">${cancer}</span>`
                ).join('')}
            </div>
        `;
        
        oncologicDiseasesContainer.innerHTML = htmlContent;
    }
}

function renderCellTherapiesSection() {
    const tissueRegenerativeContainer = document.querySelector('#cell-therapies .details-container[data-source="tissue-regenerative-therapies"]');
    if (tissueRegenerativeContainer) {
        const regenerativeCategories = [
            { 
                title: 'Joint & Musculoskeletal',
                icon: '🦴',
                examples: ['ACL/PCL Repair', 'Rotator Cuff', 'Hip/Knee/Shoulder']
            },
            {
                title: 'Aesthetic & Skin',
                icon: '✨',
                examples: ['Hair Regeneration', 'Anti-Aging Facials', 'Scar Revision']
            },
            {
                title: 'Healing & Recovery',
                icon: '🩹',
                examples: ['Wound Healing', 'Burn Treatment', 'Tissue Repair']
            }
        ];
        
        let htmlContent = '<h4 class="section-subtitle">Tissue Regenerative Therapies</h4>';
        htmlContent += '<div class="regenerative-categories">';
        
        regenerativeCategories.forEach(category => {
            htmlContent += `
                <div class="regenerative-card glass-card">
                    <div class="regen-icon">${category.icon}</div>
                    <h5>${category.title}</h5>
                    <div class="regen-examples">
                        ${category.examples.map(ex => `<span class="example-tag">${ex}</span>`).join('')}
                    </div>
                </div>
            `;
        });
        
        htmlContent += '</div>';
        tissueRegenerativeContainer.innerHTML = htmlContent;
    }
    
    const cellularSourcesContainer = document.querySelector('#cell-therapies .details-container[data-source="cellular-sources"]');
    if (cellularSourcesContainer) {
        let htmlContent = '<h4 class="section-subtitle">Advanced Cellular Sources</h4>';
        htmlContent += '<div class="cellular-sources-grid">';
        
        const sources = [
            { name: 'MSCs', full: 'Mesenchymal Stem Cells', icon: '🔬' },
            { name: 'MUSE', full: 'Multilineage Stress Enduring', icon: '⚡' },
            { name: 'Exosomes', full: 'Cell signaling vesicles', icon: '💫' },
            { name: 'Peptides', full: 'Bioactive molecules', icon: '🧪' },
            { name: 'Growth Factors', full: 'Healing proteins', icon: '🌱' }
        ];
        
        sources.forEach(source => {
            htmlContent += `
                <div class="source-card">
                    <div class="source-icon">${source.icon}</div>
                    <h5>${source.name}</h5>
                    <p>${source.full}</p>
                </div>
            `;
        });
        
        htmlContent += '</div>';
        cellularSourcesContainer.innerHTML = htmlContent;
    }
}

function renderKnowledgeSection() {
    const knowledgeGrid = document.querySelector('#sharing-knowledge .knowledge-grid');
    if (!knowledgeGrid) return;
    
    knowledgeGrid.innerHTML = ''; // Clear placeholder
    siteContent.knowledgeItems.forEach(item => {
        const knowledgeCard = document.createElement('div');
        knowledgeCard.classList.add('knowledge-item-card', 'glass-card');
        let content = '';
        
        // Add image for books and events
        if (item.imageUrl && (item.type === 'book' || item.type === 'event')) {
            content += `<div class="knowledge-image-container"><img src="${item.imageUrl}" alt="${item.title}" class="knowledge-image"></div>`;
        }
        
        content += `<h3>${item.title}</h3><p>${item.description}</p>`;
        
        if (item.type === 'video') {
            content += `<div class="video-thumbnail-container"><img src="${item.thumbnailUrl}" alt="${item.title}" class="video-thumbnail"><div class="play-button-overlay">▶</div></div>`;
            knowledgeCard.addEventListener('click', () => {
                window.open(`https://www.youtube.com/watch?v=${item.videoId}`, '_blank');
            });
        } else if (item.type === 'book' && item.link) {
            content += `<a href="${item.link}" target="_blank" class="cta-button small-cta">View on Amazon</a>`;
        }
        
        knowledgeCard.innerHTML = content;
        knowledgeGrid.appendChild(knowledgeCard);
    });
} 