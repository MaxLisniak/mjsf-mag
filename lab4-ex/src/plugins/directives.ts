export default {
    install: (app) => {
        app.directive('style', {
            beforeMount(el, binding) {
                Object.keys(binding.value).forEach((key) => {
                    el.style[key] = binding.value[key];
                });
            },
        })
        app.directive('tooltip', {
            mounted(el, binding) {
                const { content, html, delay = 0, trigger = 'hover', show = false } = binding.value;

                const tooltip = document.createElement('div');
                tooltip.classList.add('custom-tooltip');
                tooltip.style.position = 'absolute';
                tooltip.style.display = 'none';

                if (html) {
                    tooltip.innerHTML = content;
                } else {
                    tooltip.textContent = content;
                }

                document.body.appendChild(tooltip);

                const setTooltipPosition = () => {
                    const rect = el.getBoundingClientRect();
                    tooltip.style.top = `${rect.top + window.scrollY + el.offsetHeight}px`;
                    tooltip.style.left = `${rect.left + window.scrollX}px`;
                };

                let showTimeout, hideTimeout;

                const showTooltip = () => {
                    clearTimeout(hideTimeout);
                    showTimeout = setTimeout(() => {
                        tooltip.style.display = 'block';
                        setTooltipPosition();
                    }, delay);
                };

                const hideTooltip = () => {
                    clearTimeout(showTimeout);
                    hideTimeout = setTimeout(() => {
                        tooltip.style.display = 'none';
                    }, delay);
                };

                const triggers = trigger.split(' ');
                triggers.forEach(event => {
                    if (event === 'hover') {
                        el.addEventListener('mouseenter', showTooltip);
                        el.addEventListener('mouseleave', hideTooltip);
                    } else if (event === 'click') {
                        el.addEventListener('click', () => {
                            if (tooltip.style.display === 'none') {
                                showTooltip();
                            } else {
                                hideTooltip();
                            }
                        });
                    } else if (event === 'focus') {
                        el.addEventListener('focus', showTooltip);
                        el.addEventListener('blur', hideTooltip);
                    }
                });

                if (show) {
                    showTooltip();
                }
            },
            unmounted(el) {
                document.body.querySelectorAll('.custom-tooltip').forEach(tooltip => tooltip.remove());
            }
        });
    }
}
