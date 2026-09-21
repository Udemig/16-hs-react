import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { QuantityStepper } from './QuantityStepper';

/**
 * QuantityStepper Bileşeni Birim Testleri
 * 
 * Bu test paketi, ürün miktarını artıran/azaltan QuantityStepper bileşeninin
 * arayüz render işlemlerini ve kullanıcı etkileşimlerini (tıklamalar) doğrular.
 */
describe('QuantityStepper bileşeni', () => {
  /**
   * Test 1: Başlangıç miktarının doğru render edildiğini doğrular.
   * - Ne yapar: Bileşene `value={3}` gönderildiğinde ekranda '3' metninin yer aldığını kontrol eder.
   */
  it('başlangıç miktar değerini ekrana basar', () => {
    render(<QuantityStepper value={3} onChange={vi.fn()} />);

    expect(screen.getByText('3')).toBeInTheDocument();
  });

  /**
   * Test 2: Artırma butonuna basıldığında onChange fonksiyonunun çağrılmasını doğrular.
   * - Ne yapar: 'Miktarı artır' butonuna tıklandığında, mevcut değer 2 ise onChange(3) tetiklendiğini kontrol eder.
   */
  it('artı butonuna tıklandığında onChange fonksiyonunu artırılmış değerle çağırır', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<QuantityStepper value={2} onChange={handleChange} />);

    const incrementButton = screen.getByRole('button', { name: /miktarı artır/i });
    await user.click(incrementButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(3);
  });

  /**
   * Test 3: Miktar 1'den büyükken azaltma butonuna basıldığında değerin düşürülmesini doğrular.
   * - Ne yapar: 'Miktarı azalt' butonuna basıldığında, değer 3 ise onChange(2) çağrıldığını kontrol eder.
   */
  it('miktar 1den büyükken eksi butonuna tıklandığında onChange fonksiyonunu azaltılmış değerle çağırır', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<QuantityStepper value={3} onChange={handleChange} />);

    const decrementButton = screen.getByRole('button', { name: /miktarı azalt/i });
    await user.click(decrementButton);

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(2);
  });

  /**
   * Test 4: Miktar 1 iken azaltma butonuna basıldığında hiçbir işlem yapılmamasını doğrular.
   * - Ne yapar: Miktar zaten minimum (1) iken 'Miktarı azalt' tıklandığında onChange'in çağrılmadığını kontrol eder.
   */
  it('miktar 1 iken eksi butonuna tıklandığında onChange fonksiyonunu çağırmaz', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<QuantityStepper value={1} onChange={handleChange} />);

    const decrementButton = screen.getByRole('button', { name: /miktarı azalt/i });
    await user.click(decrementButton);

    expect(handleChange).not.toHaveBeenCalled();
  });
});
