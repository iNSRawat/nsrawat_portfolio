#!/usr/bin/env python3
"""
Script to generate a project image for House Sale Price Prediction project.
Creates a 1088x612 image with visual elements representing the project.
"""

import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import Rectangle, FancyBboxPatch, FancyArrowPatch
import numpy as np
import os

def generate_house_price_image(output_path):
    """Generate a project card image for house price prediction."""
    
    # Create figure with exact dimensions (1088x612)
    fig, ax = plt.subplots(figsize=(10.88, 6.12), facecolor='#ffffff')
    ax.set_xlim(0, 10.88)
    ax.set_ylim(0, 6.12)
    ax.axis('off')
    
    # Background gradient (light blue to white)
    gradient = np.linspace(0, 1, 612)
    for i, alpha in enumerate(gradient):
        color = plt.cm.Blues(0.05 + alpha * 0.1)
        ax.axhline(y=i/100, xmin=0, xmax=10.88, color=color, linewidth=0.5)
    
    # Draw a house icon on the left
    house_x = 1.5
    house_y = 3.0
    house_size = 1.5
    
    # House body (rectangle)
    house_body = Rectangle((house_x, house_y), house_size, house_size*0.8,
                          facecolor='#3B82F6', edgecolor='#1E40AF', linewidth=2)
    ax.add_patch(house_body)
    
    # House roof (triangle)
    roof_points = [
        (house_x, house_y + house_size*0.8),
        (house_x + house_size/2, house_y + house_size*1.2),
        (house_x + house_size, house_y + house_size*0.8)
    ]
    roof = plt.Polygon(roof_points, facecolor='#DC2626', edgecolor='#991B1B', linewidth=2)
    ax.add_patch(roof)
    
    # Door
    door = Rectangle((house_x + house_size*0.35, house_y), house_size*0.3, house_size*0.4,
                    facecolor='#78350F', edgecolor='#451A03', linewidth=1.5)
    ax.add_patch(door)
    
    # Window
    window = Rectangle((house_x + house_size*0.15, house_y + house_size*0.5),
                      house_size*0.25, house_size*0.2,
                      facecolor='#E0F2FE', edgecolor='#0369A1', linewidth=1)
    ax.add_patch(window)
    
    # Price chart on the right (simulated price prediction line)
    chart_x_start = 4.0
    chart_y_start = 2.0
    chart_width = 5.5
    chart_height = 2.5
    
    # Chart background
    chart_bg = FancyBboxPatch((chart_x_start, chart_y_start), chart_width, chart_height,
                             boxstyle="round,pad=0.1", facecolor='white',
                             edgecolor='#E5E7EB', linewidth=2, alpha=0.95)
    ax.add_patch(chart_bg)
    
    # Generate sample price data
    x_data = np.linspace(0, chart_width-0.5, 50)
    # Simulated price trend with some noise
    trend = 200000 + 100000 * (x_data / chart_width) + np.random.normal(0, 15000, len(x_data))
    y_data = (trend - trend.min()) / (trend.max() - trend.min()) * (chart_height - 0.5) + chart_y_start + 0.25
    
    # Plot price line
    ax.plot(chart_x_start + 0.25 + x_data, y_data, color='#3B82F6', linewidth=3, label='Predicted Price')
    
    # Add data points
    for i in range(0, len(x_data), 8):
        ax.scatter(chart_x_start + 0.25 + x_data[i], y_data[i],
                  color='#2563EB', s=80, zorder=5, edgecolors='white', linewidths=1.5)
    
    # Chart labels
    ax.text(chart_x_start + chart_width/2, chart_y_start - 0.3, 'House Price Prediction',
           ha='center', va='top', fontsize=16, fontweight='bold', color='#1F2937')
    
    # Add Y-axis label (price)
    ax.text(chart_x_start - 0.2, chart_y_start + chart_height/2, 'Price ($)',
           ha='right', va='center', fontsize=12, color='#6B7280', rotation=90)
    
    # Title
    title_text = 'House Sale Price\nPrediction'
    ax.text(1.5, 5.2, title_text, fontsize=24, fontweight='bold',
           color='#111827', ha='left', va='top',
           bbox=dict(boxstyle='round,pad=0.5', facecolor='white', edgecolor='none', alpha=0.8))
    
    # Subtitle/description area
    desc_text = 'Machine Learning • Regression Models • Real Estate Analytics'
    ax.text(1.5, 0.8, desc_text, fontsize=14, color='#6B7280',
           ha='left', va='bottom', style='italic')
    
    # Add icons/text for features (bedrooms, area, etc.)
    features_y = 4.5
    feature_x_start = 1.5
    features = ['H', 'D', 'ML', '$']
    colors = [('#DBEAFE', '#3B82F6'), ('#D1FAE5', '#10B981'), ('#FCE7F3', '#EC4899'), ('#FEF3C7', '#F59E0B')]
    for i, (feat, (bg_color, edge_color)) in enumerate(zip(features, colors)):
        x_pos = feature_x_start + i * 0.8
        ax.text(x_pos, features_y, feat, fontsize=16 if feat != 'ML' else 14, ha='center', va='center',
               bbox=dict(boxstyle='circle,pad=0.3', facecolor=bg_color, edgecolor=edge_color, linewidth=2))
    
    # Add arrow pointing from house to chart
    arrow = FancyArrowPatch((house_x + house_size + 0.3, house_y + house_size*0.4),
                           (chart_x_start - 0.2, chart_y_start + chart_height*0.6),
                           arrowstyle='->', mutation_scale=30, linewidth=2.5,
                           color='#10B981', zorder=10)
    ax.add_patch(arrow)
    
    # Add prediction accuracy indicator (optional)
    accuracy_bg = FancyBboxPatch((chart_x_start + chart_width - 1.8, chart_y_start + chart_height - 0.6),
                               1.5, 0.4, boxstyle="round,pad=0.05",
                               facecolor='#D1FAE5', edgecolor='#10B981', linewidth=1.5)
    ax.add_patch(accuracy_bg)
    ax.text(chart_x_start + chart_width - 1.05, chart_y_start + chart_height - 0.4,
           'High Accuracy', fontsize=10, fontweight='bold', color='#065F46', ha='center')
    
    plt.tight_layout(pad=0)
    plt.savefig(output_path, dpi=100, bbox_inches='tight', pad_inches=0, facecolor='white')
    plt.close()
    
    print(f"Image generated successfully at {output_path}")

if __name__ == '__main__':
    # Ensure the output directory exists
    output_dir = 'public/static/images/projects'
    os.makedirs(output_dir, exist_ok=True)
    
    output_path = os.path.join(output_dir, 'house-price-prediction.png')
    generate_house_price_image(output_path)
    print(f"\nImage saved to: {output_path}")
    print("You can now use this image in your project card!")
